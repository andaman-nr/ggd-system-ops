import { FastifyReply, FastifyRequest } from 'fastify';

type CreateShortUrlRequest = FastifyRequest<{
  Body: { originUrl: string };
}>;

export async function createShortUrlEndpoint(
  req: CreateShortUrlRequest,
  reply: FastifyReply
) {
  return reply.status(200).send({
    success: true,
    data: {
      shortUrl: 'http://localhost:3000/abc123', 
    },
  });
}
