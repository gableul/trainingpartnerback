import { DonneeGraph } from 'src/donneeGraph/donneeGraph.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Graphique{
    @PrimaryGeneratedColumn()
    readonly idGraph : number;

    @Column()
    readonly typeGraph : string;
    
    @Column()
    readonly nomSport : string;

    @Column()
    readonly titre : string;

    @Column()
    readonly date : Date;

    @ManyToOne(()=> User, (user)=> user.graphique)
    user : User;

    @OneToMany(()=>DonneeGraph, (donneeGraph) => donneeGraph.graphique, {eager : true})
    donneeGraph : DonneeGraph[]
}