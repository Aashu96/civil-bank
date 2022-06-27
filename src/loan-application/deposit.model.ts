import { Double } from "typeorm";

export class DepositSlip{
    constructor({
   deposit_amount,bank_branch,deposit_datetime}){}
    depositId:string
    deposit_amount:Double;
    bank_branch:string;
    deposit_datetime:string;
    borrower_name:string;
    borrower_id:number
    }