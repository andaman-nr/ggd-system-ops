import { FastifyInstance } from 'fastify';
import { getShortUrlRoute } from './get-origin-url/route';
import { createShortUrlRoute } from './create-short-url/route';

module.exports = async function (fastify: FastifyInstance) {
  fastify.log.info('Registering routes for short url');
  fastify.register(getShortUrlRoute);
  fastify.register(createShortUrlRoute);
};
