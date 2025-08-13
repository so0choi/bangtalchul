import { Field, InputType, PickType } from '@nestjs/graphql';
import { CreateDto } from './create.dto';

@InputType()
export class UpdateDto {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  password?: string;
}
