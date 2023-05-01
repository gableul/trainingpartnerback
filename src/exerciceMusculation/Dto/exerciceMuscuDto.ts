import { IsString, IsNotEmpty, Length, IsNumber } from  "class-validator"

export class ExerciceMuscuDto{
    @IsNumber()
    readonly idSeance : number

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly userPseudo : string

    @IsNotEmpty()
    readonly donnees : { nbrSerie : number, nbrRep : number, poids : number, nom : string, tmpsRepos : string }[]
}