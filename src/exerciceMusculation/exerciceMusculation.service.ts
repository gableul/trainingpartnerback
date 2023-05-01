import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExerciceMuscuDto } from './Dto/exerciceMuscuDto';
import { Repository } from 'typeorm';
import { Seance } from 'src/seance/seance.entity';
import { User } from 'src/user/user.entity';
import { ExerciceMuscu } from './exerciceMuscu.entity';

@Injectable()
export class ExerciceMusculationService {
    constructor (
        @InjectRepository(ExerciceMuscu)
        private readonly exerciceMuscuRepository : Repository<ExerciceMuscu>,
        @InjectRepository(Seance)
        private readonly seanceRepository : Repository<Seance>,
        @InjectRepository(User)
        private readonly usersRepository : Repository<User>
    ) {}

    async postExerciceMuscu(body : ExerciceMuscuDto) : Promise<string> {
        console.log('Received request body',body)
        const seance = await this.seanceRepository.findOneOrFail({ where : {idSeance : body.idSeance}});
        const user = await this.usersRepository.findOneOrFail({ where : {pseudo : body.userPseudo}})
        try{
            for (const donnee of body.donnees){
                const nbrSerie = donnee.nbrSerie;
                const nbrRep = donnee.nbrRep;
                const poids = donnee.poids;
                const nom = donnee.nom;
                const tmpsRepos = donnee.tmpsRepos;
                console.log("donnee : ",donnee)
                const exercice = await this.exerciceMuscuRepository.create({ nbrSerie, nbrRep, poids, nom, tmpsRepos, seance, user})
                console.log(exercice)
                await this.exerciceMuscuRepository.save(exercice)
            }
            return "Seance create !"
        }
        catch(error){
            throw new ConflictException(error.message)
        }
    }

    async getExerciceMuscu(){
        const exercice = await this.postExerciceMuscu
        return exercice;
    }
}
