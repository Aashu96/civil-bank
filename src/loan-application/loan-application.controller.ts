import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { DepositSlip } from './deposit.model';
import { LoanApplicationService } from './loan-application.service';
import { LoanApplication} from './loanApplication.model';

@Controller('loanapp')
export class LoanApplicationController {
    constructor(private readonly loanApplicationService:LoanApplicationService){}

    @Post('/individual')
    createIndividual(@Body() loan:LoanApplication
    ) {
      return this.loanApplicationService.create(loan);
    }
    @Post('/business')
    createBusiness(@Body() loan:LoanApplication
    ) {
      return this.loanApplicationService.create(loan);
    }
  
    @Post('/deposit')
    createDeposit(@Body() deposit:DepositSlip
    ) {
      return this.loanApplicationService.deposit(deposit);
    }
    @Get('/')
    findAll() {
      return {message:'Knex well'};
    }

    @Delete(':id')
    removeLoan(@Param('id') id:number) {
      return this.loanApplicationService.removeLoanApp(+id);
    }
    @Delete('/deposit/:id')
    removeDeposit(@Param('id') id:number) {
      return this.loanApplicationService.removeDeposit(+id);
    }
    
  
}
