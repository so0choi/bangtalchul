import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation login($input: LoginDto!) {
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
