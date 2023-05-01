import { IsString, IsNotEmpty, Length, IsNumber } from  "class-validator"

export class ExerciceEscaladeDto{
    @IsNumber()
    readonly idSeance : number

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly userPseudo : string

    @IsNotEmpty()
    readonly donnees : { difficulte : string, nom : string, nbrPrise : number, type : string }[]
}