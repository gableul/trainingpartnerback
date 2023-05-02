import { Seance } from 'src/seance/seance.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class ExerciceCourse{
    @PrimaryGeneratedColumn()
    readonly idExerciceCourse : number;

    @Column()
    readonly distance : number

    @Column()
    readonly chrono : string

    @Column()
    readonly bpm : number

    @Column()
    readonly vitesse : number

    @Column()
    readonly nom : string

    
    @ManyToOne(()=> Seance, (seance)=> seance.exerciceCourse)
    seance : Seance;

    @ManyToOne(()=> User, (user)=> user.graphique)
    user : User
}