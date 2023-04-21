import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn } from 'typeorm';

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

    @CreateDateColumn()
    readonly date: Date;
}