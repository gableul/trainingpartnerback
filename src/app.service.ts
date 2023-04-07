import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from 'src/Dtos/signUpDto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/Dtos/loginDto';

@Injectable()
export class AppService {
    constructor (
        @InjectRepository(User)
        private readonly usersRepository : Repository<User>
    ) {}

    getDate() : string {
      return 'DD/MM/YYYY';
    }

    async postSignUp(body : SignUpDto) : Promise<string> {
        try{
            const {password} = body;
            const hash = await bcrypt.hash(password,10)
            const user = this.usersRepository.create({...body, password : hash, ...body})
            await this.usersRepository.save(user)
            return "User Created !"
        }
        catch(error){
            throw new ConflictException(error.message)
        }
    }
    async postLogin(body: LoginDto) {
        const {password,username} = body;
        const user = await this.usersRepository.findOne({where : {username : username }});
        if (!user) throw new NotFoundException("User not found");
        const match = await bcrypt.compare(password,user.password);
        if(!match) throw new UnauthorizedException("Invalid password");
        return user;
        }
    
}