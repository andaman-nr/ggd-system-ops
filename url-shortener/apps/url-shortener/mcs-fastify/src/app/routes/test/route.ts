import { FastifyInstance, FastifyPluginOptions } from 'fastify';

module.exports = async function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
) {
  fastify.log.debug('Registering test routes');
  fastify.log.info('Registering test routes2', opts);
  fastify.swagger({
    yaml: true,
  });
  fastify.register(async function (fastify: FastifyInstance) {
    fastify.get('/', async function (request, reply) {
      fastify.log.info('Test API', opts, request, reply);
      return { message: 'Test API' };
    });
  });
  // fastify.get('/hello', async function (request, reply) {
  //   fastify.log.info('Hello API', opts, request, reply);
  //   return { message: 'Hello API' };
  // });
};
