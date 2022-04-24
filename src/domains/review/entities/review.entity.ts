import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './comment.entity';

@ObjectType()
@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  content: string;

  @OneToMany(() => Comment, (comment) => comment.review)
  @Field(() => [Comment])
  comments: Comment[];
}
