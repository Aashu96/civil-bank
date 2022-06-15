import { Module } from '@nestjs/common';
import { LoanApplicationService } from './loan-application.service';

@Module({
  providers: [LoanApplicationService]
})
export class LoanApplicationModule {}
