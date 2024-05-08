import { FastifyInstance, FastifyPluginOptions } from 'fastify';

module.exports = async function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
) {
  fastify.log.debug('Registering test routes');
  fastify.log.info('Registering test routes2', opts);
  fastify.register(async function (fastify: FastifyInstance) {
    fastify.get(
      '/',
      {
        schema: {
          tags: ['URL Shortener'],
          response: {
            200: {
              type: 'object',
              properties: {
                message: { type: 'string' },
              },
            },
          },
        },
      },
      async function (request, reply) {
        fastify.log.info('Test API', opts, request, reply);
        return { message: 'Test API' };
      }
    );
  });
};
