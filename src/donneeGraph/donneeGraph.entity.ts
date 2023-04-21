import { Graphique } from 'src/graphique/graphique.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class DonneeGraph{
    @PrimaryGeneratedColumn()
    readonly idDonnee : number;

    @Column()
    readonly idGraph : number;
    
    @Column()
    nomAttribut : string;

    @Column()
    valeur : number;

    @ManyToOne(()=> Graphique, (graphique)=> graphique.donneeGraph)
    graphique : Graphique
}