module.exports = async function (fastify, opts) {
  fastify.get('/test2', async function (request, reply) {
    return 'this is an example';
  });
};
