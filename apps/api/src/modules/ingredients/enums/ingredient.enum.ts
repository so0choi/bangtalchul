import { registerEnumType } from '@nestjs/graphql';

export {
  IngredientCategory,
  IngredientStatus,
  IngredientUnit,
  StorageType,
} from '../../../../generated/prisma/enums';

import {
  IngredientCategory,
  IngredientStatus,
  IngredientUnit,
  StorageType,
} from '../../../../generated/prisma/enums';

registerEnumType(IngredientCategory, { name: 'IngredientCategory' });
registerEnumType(StorageType, { name: 'StorageType' });
registerEnumType(IngredientStatus, { name: 'IngredientStatus' });
registerEnumType(IngredientUnit, { name: 'IngredientUnit' });
