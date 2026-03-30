import { InputType, OmitType } from '@nestjs/graphql';
import { Ingredient } from '../models/ingredient.model';

@InputType()
export class CreateIngredientInput extends OmitType(
  Ingredient,
  ['id', 'userId', 'createdAt', 'updatedAt'],
  InputType,
) {}
