import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismanpxModule } from './prismanpx/prismanpx.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PrismanpxModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
