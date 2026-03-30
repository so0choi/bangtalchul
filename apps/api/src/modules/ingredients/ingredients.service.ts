import { PrismaService } from '@db/prisma.service';
import { Injectable, Logger } from '@nestjs/common';
import { CreateIngredientInput } from './dtos/create-ingredient.dto';
import { EditIngredientInput } from './dtos/edit-ingredient.dto';
import { Err, Ok, Result } from '@common/types/result.type';
import { Ingredient } from './models/ingredient.model';

@Injectable()
export class IngredientsService {
  private readonly logger = new Logger(IngredientsService.name, {
    timestamp: true,
  });

  constructor(private readonly prismaService: PrismaService) {}

  async create(
    userId: number,
    createIngredientInput: CreateIngredientInput,
  ): Promise<Result<Ingredient>> {
    try {
      return Ok(
        await this.prismaService.ingredient.create({
          data: { userId, ...createIngredientInput },
        }),
      );
    } catch (err) {
      this.logger.error(err);
      return Err('CREATE_INGREDIENT_ERROR');
    }
  }

  async edit(editIngredient: EditIngredientInput): Promise<Result<Ingredient>> {
    try {
      return Ok(
        await this.prismaService.ingredient.update({
          where: { id: editIngredient.id },
          data: editIngredient,
        }),
      );
    } catch (err) {
      this.logger.error(err);
      return Err('EDIT_INGREDIENT_ERROR');
    }
  }

  async delte(ingredientId: number): Promise<Result<boolean>> {
    try {
      await this.prismaService.ingredient.delete({
        where: { id: ingredientId },
      });
      return Ok(true);
    } catch (err) {
      this.logger.error(err);
      return Err('DELETE_INGREDIENT_ERROR');
    }
  }

  async getAll(userId: number): Promise<Result<Ingredient[]>> {
    try {
      return Ok(
        await this.prismaService.ingredient.findMany({
          where: { userId },
        }),
      );
    } catch (err) {
      this.logger.error(err);
      return Err('GET_ALL_INGREDIENT_ERROR');
    }
  }

  async getOne(ingredientId: number): Promise<Result<Ingredient>> {
    try {
      return Ok(
        await this.prismaService.ingredient.findUniqueOrThrow({
          where: { id: ingredientId },
        }),
      );
    } catch (err) {
      this.logger.error(err);
      return Err('GET_ONE_INGREDIENT_ERROR');
    }
  }
}
