import { Field, InputType, PartialType } from '@nestjs/graphql';

import { CreateIngredientInput } from './create-ingredient.dto';

@InputType()
export class EditIngredientInput extends PartialType(CreateIngredientInput) {
  @Field()
  id: number;
}
