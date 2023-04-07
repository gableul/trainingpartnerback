import { IsString, IsEmail, IsNotEmpty, Length, IsDate } from  "class-validator"

export class SignUpDto{
    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly username : string

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly lastname : string

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly firstname : string
    
    @IsString()
    readonly birthdate: string

    @IsEmail()
    readonly email : string

    @IsString()
    @IsNotEmpty()
    @Length(3,30)
    readonly password : string

    @IsString()
    @IsNotEmpty()
    @Length(3,220)
    readonly question : string

    @IsString()
    @IsNotEmpty()
    @Length(3,220)
    readonly answer : string
}