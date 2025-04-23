import { PipeTransform } from "@nestjs/common";
import { ZodSchema } from "zod";

export class ZodValidationPipe implements PipeTransform{
    constructor(private schema:ZodSchema){}
}