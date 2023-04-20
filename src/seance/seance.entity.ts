import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Seance{
    @PrimaryGeneratedColumn()
    readonly idSeance : number;

    @Column()
    readonly userPseudo : string;
    
    @Column()
    readonly nom : string;

    @Column()
    readonly duree : string;

    @Column()
    readonly nomSport : string;

    @Column()
    readonly date: Date;
}