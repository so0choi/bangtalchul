import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import { BaseModel } from '@common/models/base.model';
import {
  IngredientCategory,
  IngredientStatus,
  IngredientUnit,
  StorageType,
} from '../enums/ingredient.enum';

@ObjectType()
export class Ingredient extends BaseModel {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  price?: number;

  @Field(() => Float, { nullable: true })
  quantity?: number;

  @Field(() => IngredientUnit, { nullable: true })
  unit?: IngredientUnit;

  @Field({ nullable: true })
  expireAt?: Date;

  @Field(() => IngredientCategory, { nullable: true })
  category?: IngredientCategory;

  @Field(() => StorageType)
  storage: StorageType;

  @Field(() => IngredientStatus)
  status: IngredientStatus;
}
