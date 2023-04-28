import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Seance{
    @PrimaryGeneratedColumn()
    readonly idSeance : number;
    
    @Column()
    readonly nomSeance : string;

    @Column()
    readonly duree : string;

    @Column()
    readonly nomSport : string;

    @Column()
    readonly date : Date;

    @ManyToOne(()=> User, (user)=> user.seance)
    user : User;
}