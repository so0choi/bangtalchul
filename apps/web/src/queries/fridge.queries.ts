import { gql } from '@apollo/client';

export const GET_ALL_INGREDIENTS = gql(`
        query AllIngredients {
            getAllIngredients {
                category
                id
                price
                name
                expireAt
                createdAt
                updatedAt
                quantity
                unit
                storage
                status
                imageUrl
            }
        }
    `);

export const CREATE_INGREDIENT = gql(`
        mutation CreateIngredient($input: CreateIngredientInput!) {
  createIngredient(input: $input) {
    name
    price 
    quantity
    status
    storage
    unit
    expireAt
    category
  }
}
        `);
