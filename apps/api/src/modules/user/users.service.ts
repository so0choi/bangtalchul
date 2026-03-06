import { ConflictException, Injectable, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../database/prisma.service';
import { Prisma, User } from '@prisma/client';
import { CreateUserInput } from './dtos/create.dto';
import { Provider } from './entities/user.entity';
import { UpdateUserInput } from './dtos/update.dto';
import { LoginInput } from './dtos/login.dto';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name, {
    timestamp: true,
  });

  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreateUserInput): Promise<User> {
    const { email, provider, password } = dto;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      return await this.prismaService.user.create({
        data: {
          email: dto.email,
          password: hashedPassword,
          name: dto.name,
          provider: provider ?? Provider.local,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002' &&
        Array.isArray(error.meta?.target) &&
        error.meta.target.includes('email')
      ) {
        throw new ConflictException(`User '${email}' already exists`);
      }
      throw error;
    }
  }

  findOneById(id: number): Promise<User> {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  findOneByEmail(email: string): Promise<User> {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  async edit({ id }: User, updateData: UpdateUserInput): Promise<User> {
    if (updateData.password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(
        updateData.password as string,
        salt,
      );
    }
    const currentUser = await this.findOneById(id);

    return this.prismaService.user.update({
      where: { id: currentUser.id },
      data: {
        ...currentUser,
        ...updateData,
      },
    });
  }

  async login(dto: LoginInput) {
    const { email, password } = dto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.prismaService.user.findFirst({
      where: { email },
    });
    if (!user) {
      throw new ConflictException(`User '${email}' not found`);
    }

    const savedUserHashedPassword = await bcrypt.hash(user.password, 10);
    if (hashedPassword !== savedUserHashedPassword) {
      throw new ConflictException(`Passwords don't match`);
    }
  }
}
