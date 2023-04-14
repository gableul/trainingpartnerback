import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryColumn } from 'typeorm';

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
}