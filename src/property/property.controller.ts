import {
  Body,
  Controller,
  Get,
//   HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { create } from 'domain';
import { idPramDto } from './dto/idPram.dto';
import { ParseIdPipe } from './pipe/parseIdpipe';
import { ZodValidationPipe } from './pipe/zodValidationPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All Property';
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    console.log(typeof id);
    console.log(typeof sort);

    return id;
  }

  @Post()
//   @HttpCode(202)

// @UsePipes(new ValidationPipe( {whitelist: true, forbidNonWhitelisted: true}))
@UsePipes(new ZodValidationPipe(createPropertySchema))
  createProperty(@Body() body: CreatePropertyZodDto) {

    return body;
  }

 @Patch(':id')
 update(@Param("id", ParseIdPipe) id,  @Body() body:CreatePropertyDto)
 {
    return body;
 }
}
