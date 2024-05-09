import { z } from 'zod';

export const createShortUrlInputDto = z.object({
  url: z.string().url(),
});

export type CreateShortUrlInputDto = z.infer<typeof createShortUrlInputDto>;

export const createShortUrlOutputDto = z.object({
  shortUrl: z.string(),
});

export type CreateShortUrlOutputDto = z.infer<typeof createShortUrlOutputDto>;
