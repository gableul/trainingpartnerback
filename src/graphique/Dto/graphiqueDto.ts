import { IsString, IsNotEmpty, Length, IsDate } from  "class-validator"

export class GraphiqueDto{
    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly typeGraph : string

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly nomSport : string

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly titre : string

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly userPseudo : string

    @IsString()
    @IsNotEmpty()
    @Length(8,10)
    readonly date : string
}