import { Module } from '@nestjs/common';
import { DepositSlipService } from './deposit-slip.service';

@Module({
  providers: [DepositSlipService]
})
export class DepositSlipModule {}
