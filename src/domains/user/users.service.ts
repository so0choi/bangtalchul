import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'domains/user/entities/user.entity';
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

  async create(createDto: CreateDto): Promise<User> {
    const { email, provider } = createDto;

    const isDuplicate = await this.usersRepository.findOne({ email });
    if (isDuplicate) {
      throw new ConflictException(`User '${email}' already exists`);
    }

    return await this.usersRepository.save(
      this.usersRepository.create({
        ...createDto,
        provider: provider ? provider : 'local',
      }),
    );
  }

  findOneById(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  findOneByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ email });
  }

  async edit({ id }: User, updateData: UpdateDto): Promise<User> {
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    const currentUser = await this.findOneById(id);

    return await this.usersRepository.save({
      ...currentUser,
      ...updateData,
    });
  }
}
