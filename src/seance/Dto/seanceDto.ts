import { IsString, IsNotEmpty, Length, IsNumber, IsDate } from  "class-validator"

export class SeanceDto{
    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly userPseudo : string;

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly nom : string;

    @IsString()
    @IsNotEmpty()
    @Length(5,15)
    readonly duree : string;

    @IsString()
    @IsNotEmpty()
    readonly nomSport : string;
}