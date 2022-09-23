import { Entity, model, property } from '@loopback/repository';

//ORM - Object Relation Mapper
//UUID

@model()
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: false,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  describe: string;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}
