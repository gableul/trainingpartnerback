import { IsString, IsNotEmpty, Length, IsNumber } from  "class-validator"

export class ExerciceCourseDto{
    @IsNumber()
    readonly idSeance : number

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly userPseudo : string

    @IsNotEmpty()
    readonly donnees : { distance : number, chrono : number, bpm : number, vitesse : number, nom : string }[]
}