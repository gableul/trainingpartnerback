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

<<<<<<< HEAD
    @ManyToOne(()=> Graphique, (graphique)=> graphique.donneeGraph)
=======
    @ManyToOne(()=> Graphique, graphique => graphique.donneeGraph)
>>>>>>> d0a2c60fe3f9f120ffcbd3d66a29247a9d9348fe
    graphique : Graphique
}