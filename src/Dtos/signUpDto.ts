import { IsString, IsEmail, IsNotEmpty, Length, IsDate } from  "class-validator"

export class SignUpDto{
    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly pseudo : string

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly nom : string

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly prenom : string
    
    @IsString()
    readonly datedenaissance : string

    @IsString()
    @IsNotEmpty()
    @Length(3,30)
    readonly motdepasse : string

    @IsEmail()
    readonly email : string

    @IsString()
    @IsNotEmpty()
    @Length(3,220)
    readonly message_mdp : string

    @IsString()
    @IsNotEmpty()
    @Length(3,220)
    readonly reponse_message : string
}