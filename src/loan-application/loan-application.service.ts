import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { isJSON, isString } from 'class-validator';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { DepositSlip } from './deposit.model';
import {  LoanApplication } from './loanApplication.model';

@Injectable()
export class LoanApplicationService {
    constructor(@InjectModel() private readonly knex: Knex){}

    async create(loan:LoanApplication) {
        try {
          const loanApp=await this.knex.table('salesforce.loan_application__c').returning('id').insert({
            name:loan.name,
            cnic__c:loan.cnic,
            contact_number__c:loan.contact_no,
            province__c:loan.province,
            loan_amount__c:loan.loan_amount,
            address__c:loan.address,
            date_of_birth__c:loan.date_of_birth,
            loan_monthly_installment__c:loan.loan_monthly_installment,
            district__c:loan.district,
            recordtypeid:loan.recordType,
            business_name__c:loan.business_name,
            business_nature__c:loan.business_nature,
            business_established_date__c:loan.business_establish,
            business_tax_file_number__c:loan.business_tax_file
          });
          const idVal=JSON.parse(JSON.stringify(loanApp))
        return idVal[0]
        } catch (err) {
          throw new HttpException(err, HttpStatus.BAD_REQUEST);
        }
      }
        async deposit(deposit:DepositSlip) {
          try {
            const query = await this.knex.select('applicant_id__c').from('salesforce.loan_application__c').where('id',deposit.borrower_id); 
            var loanID=JSON.parse(JSON.stringify(query))
            const depositSlip = await this.knex.table('salesforce.deposit_slip__c').insert({
              deposit_date_time__c:deposit.deposit_datetime,
              deposit_amount__c:deposit.deposit_amount,
              depositid__c:deposit.depositId,
              bank_branch__c:deposit.bank_branch,
              loan_application__r__applicant_id__c:loanID[0]['applicant_id__c']
            });
          return{"work":"successful"}
          } catch (err) {
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
          }
      }
      async removeDeposit(id: number) {
        if (!id) {
          throw new NotFoundException(`User ${id} does not exist`);
        }
        const  loanApp= await this.knex.table('salesforce.deposit_slip__c').where('id', id).del();
        return { loanApp };
      }

      async removeLoanApp(id: number) {
        if (!id) {
          throw new NotFoundException(`User ${id} does not exist`);
        }
        const  loanApp= await this.knex.table('salesforce.loan_application__c').where('id', id).del();
        return { loanApp };
      }
    }
