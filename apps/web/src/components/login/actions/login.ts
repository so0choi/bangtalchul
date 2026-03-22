import { gql } from '@apollo/client';
export const LOGIN_MUTATION = gql`
  mutation login($input: LoginDto!) {
    login(input: $input) {
      ok
      token
    }
  }
`;
