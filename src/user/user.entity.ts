import { Exclude } from 'class-transformer';
import { Graphique } from 'src/graphique/graphique.entity';
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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
    
    /*@OneToMany(()=>Graphique, (Graphique) =>Graphique.user)
    graphique : Graphique[]*/
}