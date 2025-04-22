import { IsInt, IsPositive, IsString, Length } from "class-validator";

export class CreatePropertyDto{

    @IsString()
    @Length(2, 10,{message: "error, name must be greater or equal to two characters"})

    name: string;

    @IsString()
    description: string;

    @IsInt()
    @IsPositive()
    area:number;
}