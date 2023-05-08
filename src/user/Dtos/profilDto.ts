import { IsString, IsNotEmpty, Length } from  "class-validator"

export class ProfilDto{
    @IsString()
    @IsNotEmpty()
    @Length(1,20)
    readonly pseudo : string

    @IsString()
    @IsNotEmpty()
    @Length(1,20)
    readonly newPseudo : string
}