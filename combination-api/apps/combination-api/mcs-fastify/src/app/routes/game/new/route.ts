module.exports = async function (fastify, opts) {
  fastify.get('/test', async function (request, reply) {
    return 'this is an example2';
  });
};