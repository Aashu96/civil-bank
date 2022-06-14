import {  TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config:TypeOrmModuleOptions={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'chawla12345',
    database: 'CivilBank',
    entities: [__dirname+'/**/*.entity{.ts,.js}'],
    synchronize:true,
    logging:true,   
}