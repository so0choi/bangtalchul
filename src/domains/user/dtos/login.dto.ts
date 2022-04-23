import { InputType, OmitType } from '@nestjs/graphql';
import { CreateDto } from './create.dto';

@InputType()
export class LoginDto extends OmitType(CreateDto, ['name']) {}
