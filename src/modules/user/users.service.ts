import { ConflictException, Injectable, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../database/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name, {
    timestamp: true,
  });

  constructor(private readonly prismaService: PrismaService) {}

  async create(createDto: Prisma.UserCreateInput): Promise<User> {
    const { email, provider } = createDto;

    try {
      await this.prismaService.user.findUniqueOrThrow({ where: { email } });
    } catch (e) {
      this.logger.error(e);
      throw new ConflictException(`User '${email}' already exists`);
    }

    return this.prismaService.user.create({
      data: {
        ...createDto,
        provider: provider ? provider : 'local',
      },
    });
  }

  findOneById(id: number): Promise<User> {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  findOneByEmail(email: string): Promise<User> {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  async edit({ id }: User, updateData: Prisma.UserUpdateInput): Promise<User> {
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
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
}
