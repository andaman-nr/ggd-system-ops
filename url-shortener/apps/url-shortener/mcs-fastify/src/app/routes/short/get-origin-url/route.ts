import { FastifyInstance } from 'fastify';
import { getOriginUrlSchema } from './schema';
import { getOriginUrlEndpoint } from './endpoint';

export async function getShortUrlRoute(fastify: FastifyInstance) {
  fastify.get('/:slug', {
    schema: getOriginUrlSchema,
    handler: getOriginUrlEndpoint,
  });
}
