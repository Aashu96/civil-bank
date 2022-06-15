import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('DepositSlip')
export class LoanApplication{
    @PrimaryGeneratedColumn()
    Deposit_ID?:string;
    
    @Column({nullable:false})
    Applicant_ID:string;

    @Column({nullable:false})
    Bank_Branch?:string;

    @Column({nullable:false})
    Deposit_Amount?:number;

    @Column({nullable:false})
    Deposit_Date_Time?:Date;

    @Column({nullable:false})
    CreatedDate?:Date;
    
}