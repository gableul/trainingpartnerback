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
    readonly birthdate : string;

    @Column()
    @Exclude()
    readonly motdepasse : string;

    @Column()
    readonly email : string;

    @Column()
    readonly message_mdp : string;

    @Column()
    readonly reponse_message : string;


}