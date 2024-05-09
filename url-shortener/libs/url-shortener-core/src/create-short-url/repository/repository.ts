import { Result } from '../../shared/Result';
import { CreateShortUrlInput, CreateShortUrlOutput } from './CreateShortUrl';
import { checkIfShortUrlExistsInput, checkIfShortUrlExistsOutput } from './checkIfShortUrlExists';

export type CreateShortUrlRepository = {
  checkIfShortUrlExists(input: checkIfShortUrlExistsInput): Promise<Result<checkIfShortUrlExistsOutput>>;
  createShortUrl(input: CreateShortUrlInput): Promise<Result<CreateShortUrlOutput>>;
  checkIsExistPath(input: { slug: string }): Promise<Result<boolean>>;
};


