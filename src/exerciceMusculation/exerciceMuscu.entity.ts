import { Seance } from 'src/seance/seance.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class ExerciceMuscu{
    @PrimaryGeneratedColumn()
    readonly idExercice : number;

    @Column()
    readonly nbrSerie : number

    @Column()
    readonly nbrRep : number

    @Column()
    readonly poids : number

    @Column()
    readonly nom : string

    @Column()
    tmpsRepos : string
    
    @ManyToOne(()=> Seance, (seance)=> seance.exerciceMuscu)
    seance : Seance;

    @ManyToOne(()=> User, (user)=> user.graphique)
    user : User
}