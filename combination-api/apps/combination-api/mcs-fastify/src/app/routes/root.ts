import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/', function () {
    return { message: 'Hello API', some: 'data' };
  });
}
