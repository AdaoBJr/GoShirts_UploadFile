import { IUploadFile } from 'src/entities/UploadFile';
import { IGoShirtsProvider } from 'src/providers/GoShirtsProvider/IGoShirtsProvider';

interface IResponse {
  token: string;
  updated: string;
}

class UploadUseCase {
  constructor(private goShirtsProvider: IGoShirtsProvider) {}
  async execute({ token, file }: IUploadFile): Promise<IResponse> {
    return this.goShirtsProvider.uploadImage({ token, file });
  }
}

export { UploadUseCase };
