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
  createProperty(@Body() body: CreatePropertyDto) {

    return body;
  }

 @Patch(':id')
 update(@Body() body:CreatePropertyDto){
    return body;
 }
}
