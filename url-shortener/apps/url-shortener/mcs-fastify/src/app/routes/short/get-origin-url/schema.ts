export const getOriginUrlSchema = {
  tags: ['URL Shortener'],
  params: {
    type: 'object',
    properties: {
      slug: {
        description: 'Slug',
        type: 'string',
        default: 's7lk',
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
            originUrl: {
              type: 'string',
              default: 'https: //www.google.com',
            },
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
};
