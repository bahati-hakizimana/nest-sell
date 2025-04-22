import {
  Body,
  Controller,
  Get,
//   HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

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
  createProperty(@Body(new ValidationPipe( {whitelist: true, forbidNonWhitelisted: true})) body: CreatePropertyDto) {

    return body;
  }
}
