import { InputType, OmitType } from '@nestjs/graphql';
import { CreateUserInput } from './create.dto';

@InputType()
export class LoginInput extends OmitType(CreateUserInput, [
  'name',
  'provider',
]) {}
