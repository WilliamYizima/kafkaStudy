import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.model';
import { DefaultCrudRepository } from '@loopback/repository';
import { EsDataSourceService } from 'src/es-data-source/es-data-source.service';

@Injectable()
export class ProductsService extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id
> {
  constructor(dataSource: EsDataSourceService) {
    super(Product, dataSource);
  }
  // create(createProductDto: CreateProductDto) {
  //   return 'This action adds a new product';
  // }
  // findAll() {
  //   return `This action returns all products`;
  // }
  // findOne(id: number) {
  //   return `This action returns a #${id} product`;
  // }
  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
