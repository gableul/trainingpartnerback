import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Sport{
    @PrimaryColumn()
    readonly nomSport : string;
}