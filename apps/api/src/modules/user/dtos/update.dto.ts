import { Field, InputType, PickType } from '@nestjs/graphql';
import { CreateUserInput } from './create.dto';

@InputType()
export class UpdateUserInput extends PickType(CreateUserInput, [
  'name',
  'password',
] as const) {}
