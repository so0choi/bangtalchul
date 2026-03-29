import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($input: LoginDto!) {
    login(input: $input) {
      ok
      accessToken
      refreshToken
      expiresIn
      refreshExpiresIn
    }
  }
`;

export const SIGN_UP_MUTATION = gql`
  mutation Signup($input: CreateUserInput!) {
    signup(createUserInput: $input) {
      ok
      message
      user {
        id
      }
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation Logout {
    logout {
      ok
      message
    }
  }
`;
