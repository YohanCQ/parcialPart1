import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Product,
  Client,
} from '../models';
import {ProductRepository} from '../repositories';

export class ProductClientController {
  constructor(
    @repository(ProductRepository)
    public productRepository: ProductRepository,
  ) { }

  @get('/products/{id}/client', {
    responses: {
      '200': {
        description: 'Client belonging to Product',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Client)},
          },
        },
      },
    },
  })
  async getClient(
    @param.path.string('id') id: typeof Product.prototype.id,
  ): Promise<Client> {
    return this.productRepository.client(id);
  }
}
