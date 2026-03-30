import { CoreResponse } from '@common/dtos/core-response.dto';
import { Field, ObjectType } from '@nestjs/graphql';
import { Ingredient } from '../models/ingredient.model';

@ObjectType()
export class GetAllIngredientsOutput extends CoreResponse {
  @Field()
  ingredients: Ingredient[];
}
