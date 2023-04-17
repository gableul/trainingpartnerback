import { IsString, IsEmail, IsNotEmpty, Length } from  "class-validator"

export class SignUpDto{
    @IsString()
    @IsNotEmpty()
    @Length(1,20)
    readonly pseudo : string

    @IsString()
    @IsNotEmpty()
    @Length(1,25)
    readonly nom : string

    @IsString()
    @IsNotEmpty()
    @Length(1,25)
    readonly prenom : string
    
    @IsString()
    @IsNotEmpty()
    @Length(10,10)
    readonly dateDeNaissance : string

    @IsEmail()
    readonly email : string

    @IsString()
    @IsNotEmpty()
    @Length(10,100)
    readonly messageMdp : string

    @IsString()
    @IsNotEmpty()
    @Length(1,100)
    readonly reponseMessage : string

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly motDePasse : string
}