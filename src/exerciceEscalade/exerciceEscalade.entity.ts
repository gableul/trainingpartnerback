import { Seance } from 'src/seance/seance.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class ExerciceEscalade{
    @PrimaryGeneratedColumn()
    readonly idExercice : number;

    @Column()
    readonly difficulte : string

    @Column()
    readonly nom : string

    @Column()
    readonly nbrPrise : number

    @Column()
    readonly type : string

    
    @ManyToOne(()=> Seance, (seance)=> seance.exerciceEscalade)
    seance : Seance;

    @ManyToOne(()=> User, (user)=> user.graphique)
    user : User
}