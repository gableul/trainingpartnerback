import { ConflictException, Injectable } from '@nestjs/common';
import { ExerciceEscalade } from './exerciceEscalade.entity';
import { Seance } from 'src/seance/seance.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExerciceEscaladeDto } from './Dto/exerciceEscaladeDto';

@Injectable()
export class ExerciceEscaladeService {
    constructor (
        @InjectRepository(ExerciceEscalade)
        private readonly exerciceEscaladeRepository : Repository<ExerciceEscalade>,
        @InjectRepository(Seance)
        private readonly seanceRepository : Repository<Seance>,
        @InjectRepository(User)
        private readonly usersRepository : Repository<User>
    ) {}

    async postExerciceEscalade(body : ExerciceEscaladeDto) : Promise<string> {
        console.log('Received request body',body)
        const seance = await this.seanceRepository.findOneOrFail({ where : {idSeance : body.idSeance}});
        const user = await this.usersRepository.findOneOrFail({ where : {pseudo : body.userPseudo}})
        try{
            for (const donnee of body.donnees){
                const difficulte = donnee.difficulte;
                const nom = donnee.nom;
                const nbrPrise = donnee.nbrPrise;
                const type = donnee.type;
                console.log("donnee : ",donnee)
                const exercice = await this.exerciceEscaladeRepository.create({ difficulte, nom, nbrPrise, type, seance, user})
                console.log(exercice)
                await this.exerciceEscaladeRepository.save(exercice)
            }
            return "Seance create !"
        }
        catch(error){
            throw new ConflictException(error.message)
        }
    }

    async getExerciceEscalade(){
        const exercice = await this.postExerciceEscalade
        return exercice;
    }
}
