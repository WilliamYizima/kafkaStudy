import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { EsDataSourceService } from './es-data-source/es-data-source.service';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService, EsDataSourceService],
})
export class AppModule {}
