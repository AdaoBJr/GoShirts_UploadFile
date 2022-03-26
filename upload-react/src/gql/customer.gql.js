import { gql } from '@apollo/client';

export const AVATAR_IMAGE_MUTATION = gql`
  mutation uploadAvatarImage($file: String!) {
    updateAvatarImage(file: $file) {
      token
      updated
    }
  }
`;

export const CUSTOMER_INFO_QUERY = gql`
  query CustomerInfo {
    customerInfo {
      customer {
        email
        firstname
        cpf
        avatarImage
        tokens {
          items
        }
      }
    }
  }
`;
