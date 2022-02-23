import {Entity, model, property, hasMany} from '@loopback/repository';
import {Product} from './product.model';

@model()
export class Client extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  lastname: string;

  @property({
    type: 'object',
    required: true,
  })
  address: {
    street:{type: 'string',
    required: true}
  };

  @property({
    type: 'object',
    required: true,
  })
  contact: {
    telephone:
    {type: 'string',
    required: true}
  };

  @hasMany(() => Product)
  products: Product[];

  constructor(data?: Partial<Client>) {
    super(data);
  }
}

export interface ClientRelations {
  // describe navigational properties here
}

export type ClientWithRelations = Client & ClientRelations;
