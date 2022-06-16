import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
       constructor(
        @InjectRepository(User) private userRepository:Repository<User>, 
        private readonly jwtService:JwtService
    ){}
   /** getAll():Promise<User[]>{
        return this.userRepository.find();
    }
         */
    async getOneById(id:number):Promise<User>{
        try{
            const user= await this.userRepository.findOneOrFail(id);
            return user;
        }
        catch(err){
            throw err;
        }
        }
    
    createUser(name:string,email:string,password:string):Promise<User>{
        const newUser = this.userRepository.create({name,email,password});
        return  this.userRepository.save(newUser);
    }  
    async deleteUser(id:number): Promise<User>{
            const user= await this.getOneById(id);
            return this.userRepository.remove(user);
    }  
    async getOne(email:any):Promise<User | undefined>{
           return this.userRepository.findOne(email);         
    }
    async generateToken(payload:User){
        return this.jwtService.sign(payload);
    }
            
  }
 

