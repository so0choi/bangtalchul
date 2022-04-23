import { InputType, PickType } from '@nestjs/graphql';
import { CreateDto } from './create.dto';

@InputType()
export class UpdateDto extends PickType(CreateDto, ['name', 'password']) {}
