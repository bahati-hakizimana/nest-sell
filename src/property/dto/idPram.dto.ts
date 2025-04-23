import { IsInt, IsPositive } from "class-validator";

export class idPramDto{
    @IsInt()
    @IsPositive()
    id:number
}