import { IsString, IsNotEmpty, Length, IsNumber } from  "class-validator"

export class DonneeGraphDto{
    @IsNumber()
    readonly idGraph : number

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly userPseudo : string

    @IsNotEmpty()
    readonly donnees : { nomAttribut : string, valeur : number }[]
}