import { Graphique } from 'src/graphique/graphique.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class DonneeGraph{
    @PrimaryGeneratedColumn()
    readonly idDonnee : number;

    @Column()
    nomAttribut : string;

    @Column()
    valeur : number;
    
    @ManyToOne(()=> Graphique, (graphique)=> graphique.donneeGraph)
    graphique : Graphique;

    @ManyToOne(()=> User, (user)=> user.graphique)
    user : User
}