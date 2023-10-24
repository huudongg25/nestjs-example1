import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './dto/product.dto';

@Controller('api/v1/products')
export class ProductsController {
  constructor(private productService: ProductService) {
  }

  @Get()
  getAllProducts() {
    return this.productService.getAll();
  }

  @Get('/search')
  searchProduct(@Query('q') q: string) {
    return q;
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return 'product';
  }

  @Post()
  createProduct(@Body() body: ProductDTO) {
    try {
      return this.productService.createProduct(body);
    } catch (error) {
      console.log(11111111111111, error);

      return error;
    }
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body: ProductDTO) {
    return body;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    try {
      return this.productService.deleteProduct(id);
    } catch (error) {
      return error;
    }
  }
}