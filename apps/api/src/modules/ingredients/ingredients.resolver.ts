import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Ingredient } from './models/ingredient.model';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientInput } from './dtos/create-ingredient.dto';
import { EditIngredientInput } from './dtos/edit-ingredient.dto';
import { CurrentUser } from '@common/decorators/getCurrentUser';
import { User } from '@modules/user/models/user.model';
import { assertOk } from '@common/types/result.type';

@Resolver(() => Ingredient)
export class IngredientsResolver {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Mutation(() => Ingredient, { name: 'createIngredient' })
  async create(
    @CurrentUser() user: User,
    @Args('input') input: CreateIngredientInput,
  ): Promise<Ingredient> {
    return assertOk(await this.ingredientsService.create(user.id, input));
  }

  @Mutation(() => Ingredient, { name: 'editIngredient' })
  async edit(@Args('input') input: EditIngredientInput): Promise<Ingredient> {
    return assertOk(await this.ingredientsService.edit(input));
  }

  @Mutation(() => Boolean, { name: 'deleteIngredient' })
  async delete(@Args('ingredientId') ingredientId: number): Promise<boolean> {
    assertOk(await this.ingredientsService.delte(ingredientId));
    return true;
  }

  @Query(() => [Ingredient], { name: 'getAllIngredients' })
  async getAll(@CurrentUser() user: User): Promise<Ingredient[]> {
    return assertOk(await this.ingredientsService.getAll(user.id));
  }

  @Query(() => Ingredient, { name: 'getOneIngredient' })
  async getOne(
    @Args('ingredientId') ingredientId: number,
  ): Promise<Ingredient> {
    return assertOk(await this.ingredientsService.getOne(ingredientId));
  }
}
