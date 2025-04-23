import { IsInt, IsPositive, IsString, Length } from "class-validator";
import { group } from "console";
import { create } from "domain";

export class CreatePropertyDto{

    @IsString({always:true})
    @Length(2, 10,{groups:['create']})
    @Length(1, 15,{groups:['update']})

    name: string;

    @IsString()
    @Length(2, 10, {groups:['create']})
    @Length(1, 15, {groups:['update']})
    description: string;

    @IsInt({always:true})
    @IsPositive()
    area:number;
}