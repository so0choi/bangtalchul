import { Field, InputType, Int, ObjectType, OmitType } from '@nestjs/graphql';
import { User } from 'domains/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Review } from './review.entity';

@ObjectType()
@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @ManyToOne(() => User, (user) => user.comments)
  @Field(() => User)
  writer: User;

  @Column()
  @Field()
  content: string;

  @ManyToOne(() => Review, (review) => review.comments)
  @Field(() => Int)
  review: Review;
}
