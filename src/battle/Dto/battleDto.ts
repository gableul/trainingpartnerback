import { IsString, IsNotEmpty, Length, IsNumber } from  "class-validator"

export class DonneeGraphDto{
    @IsNumber()
    readonly idSeance : number
}