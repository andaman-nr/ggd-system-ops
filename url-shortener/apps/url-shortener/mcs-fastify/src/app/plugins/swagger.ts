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
        description: 'URL Shortener API with Fastify',
        version: '1.0.0',
      },
      host:
        (process.env.HOST ?? 'localhost') + ':' + (process.env.PORT ?? '3000'),
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json'],
      basePath: '/url-shortener-webapi',
      tags: [
        {
          name: 'URL Shortener',
          description: 'URL Shortener API',
        },
      ],
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
    routePrefix: opts.appPrefix + '/docs',
    uiConfig: {
      docExpansion: 'none',
      deepLinking: false,
    },
  });
});
