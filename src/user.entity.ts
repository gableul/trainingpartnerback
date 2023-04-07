import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User{
    @Column()
    readonly username : string;
    
    @Column()
    readonly lastname : string;

    @Column()
    readonly firsname : string;

    @PrimaryColumn({unique : true})
    readonly email : string;

    @Column()
    readonly birthdate : string;

    @Column()
    @Exclude()
    readonly password : string;

}