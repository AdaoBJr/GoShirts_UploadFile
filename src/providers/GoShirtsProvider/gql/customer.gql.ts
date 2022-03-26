import { gql } from 'graphql-request';

export const AVATAR_IMAGE_MUTATION = gql`
  mutation uploadAvatarImage($file: String!) {
    updateAvatarImage(file: $file) {
      token
      updated
    }
  }
`;
