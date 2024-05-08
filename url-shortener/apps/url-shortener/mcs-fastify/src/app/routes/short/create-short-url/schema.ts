export const createShortUrlSchema = {
  summary: 'Create a short URL',
  description: 'Create a short URL from an original URL',
  tags: ['URL Shortener'],
  body: {
    type: 'object',
    required: ['originUrl'],
    properties: {
      originUrl: {
        description: 'URL',
        type: 'string',
        format: 'uri',
        default: 'https://www.google.com',
      },
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        success: {
          type: 'boolean',
          default: true,
        },
        data: {
          type: 'object',
          properties: {
            shortUrl: {
              type: 'string',
              default: 'http://localhost:3000/abc123',
            },
          },
        },
      },
      404: {
        description: 'Not found',
        type: 'object',
        properties: {
          success: {
            type: 'boolean',
            default: false,
          },
          message: {
            type: 'string',
            default: 'Short URL not found',
          },
        },
      },
    },
  },
};
