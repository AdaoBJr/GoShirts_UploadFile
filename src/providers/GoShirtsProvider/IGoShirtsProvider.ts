import { IGoShirtsProviderDTO } from './IGoShirtsProviderDTO';

interface IGoShirtsProvider {
  uploadImage({ token, file }: IGoShirtsProviderDTO): Promise<any>;
}

export { IGoShirtsProvider };
