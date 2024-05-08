import { FastifyReply, FastifyRequest } from 'fastify';

type GetOriginUrlRequest = FastifyRequest<{
  Params: { slug: string };
}>;

export async function getOriginUrlEndpoint(
  req: GetOriginUrlRequest,
  reply: FastifyReply
) {
  return reply.status(200).send({
    success: true,
    data: {
      originUrl: 'https://www.google.com',
    },
  });
}
