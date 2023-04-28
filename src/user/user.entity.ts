import { Exclude } from 'class-transformer';
import { DonneeGraph } from 'src/donneeGraph/donneeGraph.entity';
import { Graphique } from 'src/graphique/graphique.entity';
import { Seance } from 'src/seance/seance.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity()
export class User{
    @PrimaryColumn({unique : true})
    readonly pseudo : string;
    
    @Column()
    readonly nom : string;

    @Column()
    readonly prenom : string;

    @Column()
    readonly dateDeNaissance : string;

    @Column()
    readonly email : string;

    @Column()
    readonly messageMdp : string;

    @Column()
    readonly reponseMessage : string;

    @Column()
    @Exclude()
    readonly motDePasse : string;
    
    @OneToMany(()=>Graphique, (Graphique) =>Graphique.user)
    graphique : Graphique[]

    @OneToMany(()=>Seance, (seance) =>seance.user)
    seance :Seance[]
}