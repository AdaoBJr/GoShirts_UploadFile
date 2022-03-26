import requestAPIGateway from 'src/utils/requestAPIGateway';
import { AVATAR_IMAGE_MUTATION } from '../gql/customer.gql';
import { IGoShirtsProvider } from '../IGoShirtsProvider';
import { IGoShirtsProviderDTO } from '../IGoShirtsProviderDTO';

class GoShirtsProvider implements IGoShirtsProvider {
  async uploadImage({ token, file }: IGoShirtsProviderDTO): Promise<any> {
    const variables = { file };
    const query = AVATAR_IMAGE_MUTATION;

    const data = { variables, query, token };

    return await requestAPIGateway({ data });
  }
}

export { GoShirtsProvider };
