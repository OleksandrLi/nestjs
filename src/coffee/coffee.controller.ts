import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res} from '@nestjs/common';

@Controller('coffees')
export class CoffeeController {
  @Get('')
  findAll(@Res() response) {
    response.status(200).send('This action return all coffees');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return #${id} coffee`;
  }

  @Post('')
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }
}
