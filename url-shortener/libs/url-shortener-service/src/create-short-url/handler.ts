import { CreateShortUrlRepository, Logger, Result } from 'url-shortener-core';
import { CreateShortUrlInputDto, CreateShortUrlOutputDto } from './dto';
import { CreateShortUrlMapper } from './mapper';
import { generateShortLink } from '../logic/generateShortLink';

export class CreateShortUrlHandler {
  private repo: CreateShortUrlRepository;
  private mapper: CreateShortUrlMapper;
  private logger: Logger;

  constructor(repo: CreateShortUrlRepository, mapper: CreateShortUrlMapper, logger: Logger) {
    this.repo = repo;
    this.mapper = mapper;
    this.logger = logger;
  }

  async execute(req: CreateShortUrlInputDto): Promise<Result<CreateShortUrlOutputDto>> {
    this.logger.info('Creating short url', req);
    const createShortUrlModel = this.mapper.parseToModel(req);
    if (createShortUrlModel.fail) {
      this.logger.error(createShortUrlModel.error);
      return Result.fail(createShortUrlModel.error);
    }

    const checkIfShortUrlExists = await this.repo.checkIfShortUrlExists({
      originUrl: createShortUrlModel.data.originUrl,
    });

    if (checkIfShortUrlExists.fail) {
      this.logger.error(checkIfShortUrlExists.error);
      return Result.fail(checkIfShortUrlExists.error);
    }

    if (checkIfShortUrlExists.data.exists) {
      this.logger.info('Short url already exists', checkIfShortUrlExists.data);
      return Result.ok(checkIfShortUrlExists.data);
    }

    // TODO - Generating short link
    let slug = generateShortLink();
    let checkIsExistPath = await this.repo.checkIsExistPath({ slug });
    while (checkIsExistPath.success) {
      slug = generateShortLink();
      checkIsExistPath = await this.repo.checkIsExistPath({ slug });
    }

    const createShortUrl = await this.repo.createShortUrl({
      originUrl: createShortUrlModel.data.originUrl,
      slug: 'req.slug',
    });

    if (createShortUrl.fail) {
      this.logger.error(createShortUrl.error);
      return Result.fail(createShortUrl.error);
    }

    const createShortUrlDto = this.mapper.parseToDto(createShortUrl.data);
    if (createShortUrlDto.fail) {
      this.logger.error(createShortUrlDto.error);
      return Result.fail(createShortUrlDto.error);
    }

    this.logger.info('Short url created', createShortUrlDto.data);
    return Result.ok(createShortUrlDto.data);
  }
}
