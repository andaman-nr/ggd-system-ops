import { FastifyInstance } from 'fastify';
import { createShortUrlSchema } from './schema';
import { createShortUrlEndpoint } from './endpoint';

export async function createShortUrlRoute(fastify: FastifyInstance) {
  fastify.post('/', {
    schema: createShortUrlSchema,
    handler: createShortUrlEndpoint,
  });
}
