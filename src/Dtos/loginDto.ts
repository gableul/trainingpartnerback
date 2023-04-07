import { IsString, IsEmail, IsNotEmpty, Length } from  "class-validator"

export class LoginDto{
    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly username : string

    @IsString()
    @IsNotEmpty()
    @Length(3,30)
    readonly password : string
}