import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('LoanApplication')
export class LoanApplication{
    @PrimaryGeneratedColumn()
    Applicant_ID?:string;
    
    @Column()
    Applicant_Name:string;

    @Column({nullable:false})
    CNIC?:string;

    @Column()
    Address?:string;

    @Column({nullable:false})
    Contact_Number?:number;

    @Column({nullable:false})
    Date_of_birth?:Date;

    @Column({nullable:false})
    Province?:string;

    @Column({nullable:false})
    District?:string;

    @Column({nullable:false})
    Loan_Monthly_Installment:number;

    @Column({nullable:false})
    Loan_Amount:number;

    @Column({nullable:false})
    RecordTypeID?:string;

    @Column()
    Business_Name?:string;

    @Column()
    Business_Nature?:string;

    @Column()
    Business_Established_Date?:Date;

    @Column()
    Business_Tax_File_Number?:number

    @Column({nullable:false})
    Created_Date?:Date;


}