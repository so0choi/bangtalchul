import { InputType, OmitType } from '@nestjs/graphql';
import { CreateUserInput } from './create.dto';

@InputType()
export class LoginDto extends OmitType(CreateUserInput, ['name', 'provider']) {}
