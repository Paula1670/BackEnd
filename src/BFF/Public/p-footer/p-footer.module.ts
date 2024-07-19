import { Module } from '@nestjs/common';
import { PFooterService } from './p-footer.service';
import { PFooterController } from './p-footer.controller';

@Module({
  controllers: [PFooterController],
  providers: [PFooterService],
})
export class PFooterModule {}
