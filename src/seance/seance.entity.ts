import { ExerciceCourse } from 'src/exerciceCourse/exerciceCourse.entity';
import { ExerciceEscalade } from 'src/exerciceEscalade/exerciceEscalade.entity';
import { ExerciceMuscu } from 'src/exerciceMusculation/exerciceMuscu.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Seance{
    @PrimaryGeneratedColumn()
    readonly idSeance : number;
    
    @Column()
    readonly nomSeance : string;

    @Column()
    readonly duree : string;

    @Column()
    readonly nomSport : string;

    @Column()
    readonly date : string;

    @ManyToOne(()=> User, (user)=> user.seance)
    user : User;

    @OneToMany(()=>ExerciceMuscu, (exerciceMuscu) => exerciceMuscu.seance, {eager : true})
    exerciceMuscu : ExerciceMuscu[]

    @OneToMany(()=>ExerciceEscalade, (exerciceEscalade) => exerciceEscalade.seance, {eager : true})
    exerciceEscalade : ExerciceEscalade[]

    @OneToMany(()=>ExerciceCourse, (exerciceCourse) => exerciceCourse.seance, {eager : true})
    exerciceCourse : ExerciceCourse[]
}