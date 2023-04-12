import { IsString, IsEmail, IsNotEmpty, Length } from  "class-validator"

export class LoginDto{
    @IsString()
    @IsNotEmpty()
    @Length(1,20)
    readonly pseudo : string

    @IsString()
    @IsNotEmpty()
    @Length(3,15)
    readonly motdepasse : string
}