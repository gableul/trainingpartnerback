import { IsString, IsNotEmpty, Length, IsDate } from  "class-validator"

export class SeanceDto{
    @IsString()
    @IsNotEmpty()
    @Length(3,25)
    readonly nomSeance : string;

    @IsString()
    @IsNotEmpty()
    readonly duree : string;

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly nomSport : string;

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly userPseudo : string;

    @IsString()
    @IsNotEmpty()
    @Length(8,10)
    readonly date : string;

}