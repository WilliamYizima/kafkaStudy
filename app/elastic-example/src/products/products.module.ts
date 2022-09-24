import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { EsDataSourceService } from 'src/es-data-source/es-data-source.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, EsDataSourceService],
})
export class ProductsModule {}
