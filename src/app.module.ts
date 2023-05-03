import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismanpxModule } from './prismanpx/prismanpx.module';

@Module({
  imports: [PrismanpxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
