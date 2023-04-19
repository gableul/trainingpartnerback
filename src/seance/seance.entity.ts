import { DonneeGraph } from 'src/donneeGraph/donneeGraph.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Seance{
    @PrimaryGeneratedColumn()
    readonly idSeance : number;

    @PrimaryGeneratedColumn()
    readonly userPseudo : string;
    
    @Column()
    readonly nom : string;

    @Column()
    readonly duree : string;

    @Column()
    readonly nomSport : string;

    @Column()
    readonly date: Date;

    /*@ManyToOne(()=> User, (user)=> user.graphique)
    user : string;

    @OneToMany(()=>DonneeGraph, (donneeGraph) => donneeGraph.graphique)
    donneeGraph : DonneeGraph[]*/
}