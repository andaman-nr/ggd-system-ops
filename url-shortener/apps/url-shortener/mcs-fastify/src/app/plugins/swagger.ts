import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { AppOptions } from '../app';

export default fp(async function (fastify: FastifyInstance, opts: AppOptions) {
  fastify.log.info('Registering Swagger plugin');
  fastify.register(fastifySwagger, {
    swagger: {
      info: {
        title: 'URL Shortener API',
        description: 'This Api is a URL Shortener',
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
      basePath: '/url-shortener-webapi',
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
      paths: {
        '/test': {
          get: {
            tags: ['Game'],
            summary: 'Test endpoint',
            description: 'Test endpoint',
            produces: ['application/json'],
            responses: {
              200: {
                description: 'Successful response',
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string' },
                  },
                },
              },
            },
          },
        },
        '/test/{id}': {
          get: {
            tags: ['Game'],
            summary: 'Test endpoint with parameter',
            description: 'Test endpoint with parameter',
            produces: ['application/json'],
            parameters: [
              {
                name: 'id',
                in: 'path',
                description: 'ID of the game',
                required: true,
                type: 'string',
              },
            ],
            responses: {
              200: {
                description: 'Successful response',
                schema: {
                  type: 'object',
                  properties: {
                    message: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  fastify.register(fastifySwaggerUi, {
    routePrefix: opts.appPrefix + '/docs',
    uiConfig: {
      docExpansion: 'none',
      deepLinking: false,
    },
  });
});
