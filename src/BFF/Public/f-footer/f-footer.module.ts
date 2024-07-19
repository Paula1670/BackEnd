import { Module } from '@nestjs/common';
import { FFooterService } from './f-footer.service';
import { FFooterController } from './f-footer.controller';

@Module({
  controllers: [FFooterController],
  providers: [FFooterService],
})
export class FFooterModule {}
