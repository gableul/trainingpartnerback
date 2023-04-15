import { IsString, IsNotEmpty, Length } from  "class-validator"

export class DonneeGraphDto{
    @IsString()
    @IsNotEmpty()
    @Length(3,11)
    readonly nomSport : string

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly titre : string
}