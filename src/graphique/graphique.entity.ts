import { DonneeGraph } from 'src/donneeGraph/donneeGraph.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Graphique{
    @Column()
    readonly typeGraph : string;

    @PrimaryGeneratedColumn()
    readonly idGraph : number;

    @ManyToOne(()=> User, (user)=> user.graphique)
    userPseudo : User
    
    @Column()
    readonly nomSport : string;

    @Column()
    readonly titre : string;

    @OneToMany(()=>DonneeGraph, (donneeGraph) => donneeGraph.graphique)
    donneeGraph : DonneeGraph[]
}