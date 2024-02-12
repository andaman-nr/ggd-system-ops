import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get(
    '/',
    {
      schema: {
        description: 'post some data',
        tags: ['user', 'code'],
        summary: 'qwerty',
        response: {
          200: {
            description: 'Successful response',
            type: 'object',
            properties: {
              message: { type: 'string' },
              // some: { type: 'string' },
            },
          },
          default: {
            description: 'Default response',
            type: 'object',
            properties: {},
          },
        },
      },
    },
    function () {
      return { message: 'Hello API', some: 'data' };
    }
  );
}
