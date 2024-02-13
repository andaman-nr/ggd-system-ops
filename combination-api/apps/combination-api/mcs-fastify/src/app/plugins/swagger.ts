import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

export default fp(async function (fastify: FastifyInstance) {
  fastify.log.info('Registering Swagger plugin');
  fastify.register(fastifySwagger, {
    swagger: {
      info: {
        title: 'Combination API',
        description: 'This Api is a combination of multiple services into one.',
        version: '1.0.0',
      },
      // externalDocs: {
      // url: 'https://swagger.io',
      // description: 'Find more info here',
      // },
      host:
        (process.env.HOST ?? 'localhost') + ':' + (process.env.PORT ?? '3000'),
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        {
          name: 'Game',
          description: 'Game info from Steam',
          externalDocs: {
            url: 'https://developer.valvesoftware.com/wiki/Steam_Web_API',
          },
        },
      ],
      definitions: {
        // User: {
        //   type: 'object',
        //   required: ['id', 'email'],
        //   properties: {
        //     id: { type: 'string', format: 'uuid' },
        //     firstName: { type: 'string' },
        //     lastName: { type: 'string' },
        //     email: { type: 'string', format: 'email' },
        //   },
        // },
      },
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header',
        },
      },
    },
  });

  fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'none',
      deepLinking: false,
    },
  });
});
