import { IsString, IsEmail, IsNotEmpty, Length, IsDate } from  "class-validator"

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
    @Length(6,15)
    readonly datedenaissance : string

    @IsEmail()
    readonly email : string

    @IsString()
    @IsNotEmpty()
    @Length(10,100)
    readonly message_mdp : string

    @IsString()
    @IsNotEmpty()
    @Length(1,100)
    readonly reponse_message : string

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly motdepasse : string
}