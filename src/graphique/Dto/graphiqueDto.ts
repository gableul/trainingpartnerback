import { IsString, IsNotEmpty, Length } from  "class-validator"

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
}