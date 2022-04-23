import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'entities/user.entity';
import { Repository } from 'typeorm';
import { CreateDto } from './dtos/create.dto';
import * as bcrypt from 'bcrypt';
import { UpdateDto } from './dtos/update.dto';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createDto: CreateDto): Promise<User | Error> {
    const { email } = createDto;
    try {
      const isDuplicate = await this.usersRepository.findOne({ email });

      if (isDuplicate) {
        return new Error(`User '${email}' already exists`);
      }
      return await this.usersRepository.save(
        this.usersRepository.create(createDto),
      );
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async findOneById(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async findOneOrThrowByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({ email });
    if (!user) {
      throw new NotFoundException(`User with ${email} doesn't exist`);
    }
    return user;
  }

  // async update({ name, password }: UpdateDto): Promise<User | Error> {}
}
