import { CreateShortUrlInputDto, CreateShortUrlOutputDto } from './dto';
import { CreateShortUrlInputModel, CreateShortUrlOutputModel, DataParser, Result, Logger } from 'url-shortener-core';

export class CreateShortUrlMapper {
  private logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }
  parseToModel: DataParser<CreateShortUrlInputDto, CreateShortUrlInputModel> = (
    data: CreateShortUrlInputDto
  ): Result<CreateShortUrlInputModel> => {
    try {
      this.logger.info('Parsing dto to model', data);
      const result: CreateShortUrlInputModel = {
        originUrl: data.url,
      };
      this.logger.info('Parsed dto to model', result);
      return Result.ok(result);
    } catch (error) {
      this.logger.error('Error parsing dto to model', error);
      return Result.fail(error);
    }
  };

  parseToDto: DataParser<CreateShortUrlOutputModel, CreateShortUrlOutputDto> = (
    data: CreateShortUrlOutputModel
  ): Result<CreateShortUrlOutputDto> => {
    try {
      this.logger.info('Parsing model to dto', data);
      const result: CreateShortUrlOutputDto = {
        shortUrl: data.shortUrl,
      };
      this.logger.info('Parsed model to dto', result);
      return Result.ok(result);
    } catch (error) {
      this.logger.error('Error parsing model to dto', error);
      return Result.fail(error);
    }
  };
}
