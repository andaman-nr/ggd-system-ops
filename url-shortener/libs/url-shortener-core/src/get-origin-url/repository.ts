import { Result } from '../shared/Result';
import { GetOriginUrlInputModel, GetOriginUrlOutputModel } from './model';

export type GetOriginUrlRepository = {
  getOriginUrl(props: GetOriginUrlInputModel): Promise<Result<GetOriginUrlOutputModel>>;
};
