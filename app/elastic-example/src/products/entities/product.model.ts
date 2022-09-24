import { Entity, model, property } from '@loopback/repository';

//ORM - Object Relation Mapper
//UUID

@model()
export class SearchHelper extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: false,
  })
  _id: string;

  @property({
    type: 'string',
    required: true,
  })
  describe: string;

  @property({
    type: 'number',
    required: true,
  })
  id: number;

  constructor(data?: Partial<SearchHelper>) {
    super(data);
  }
}
