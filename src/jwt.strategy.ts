import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
 
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt') {
    constructor(){
        super({
            ignoreExpiration: false,
            secretOrKey:"SECRET",
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
        });
    }
 
    validate(payload:any):any{
        if(payload === null){
            throw new UnauthorizedException();
        }
        return payload;
    }
}