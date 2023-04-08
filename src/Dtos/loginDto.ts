import { IsString, IsEmail, IsNotEmpty, Length } from  "class-validator"

export class LoginDto{
    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly pseudo : string

    @IsString()
    @IsNotEmpty()
    @Length(3,30)
    readonly motdepasse : string
}