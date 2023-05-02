import { ConflictException, Injectable } from '@nestjs/common';
import { ExerciceCourse } from './exerciceCourse.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Seance } from 'src/seance/seance.entity';
import { User } from 'src/user/user.entity';
import { ExerciceCourseDto } from './Dto/exerciceCourseDto';

@Injectable()
export class ExerciceCourseService {
    constructor (
        @InjectRepository(ExerciceCourse)
        private readonly exerciceCourseRepository : Repository<ExerciceCourse>,
        @InjectRepository(Seance)
        private readonly seanceRepository : Repository<Seance>,
        @InjectRepository(User)
        private readonly usersRepository : Repository<User>
    ) {}

    async postExerciceCourse(body : ExerciceCourseDto) : Promise<string> {
        console.log('Received request body',body)
        const seance = await this.seanceRepository.findOneOrFail({ where : {idSeance : body.idSeance}});
        const user = await this.usersRepository.findOneOrFail({ where : {pseudo : body.userPseudo}})
        try{
            for (const donnee of body.donnees){
                const distance = donnee.distance;
                const chrono = donnee.chrono;
                const bpm = donnee.bpm;
                const vitesse = donnee.vitesse;
                const nom = donnee.nom;
                console.log("donnee : ",donnee)
                const exercice = await this.exerciceCourseRepository.create({ distance, chrono, bpm, vitesse, nom, seance, user})
                console.log(exercice)
                await this.exerciceCourseRepository.save(exercice)
            }
            return "Seance create !"
        }
        catch(error){
            throw new ConflictException(error.message)
        }
    }

    async getExerciceCourse(){
        const exercice = await this.postExerciceCourse
        return exercice;
    }
}
