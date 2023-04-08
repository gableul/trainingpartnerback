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
            const {motdepasse} = body;
            const hash = await bcrypt.hash(motdepasse,10)
            const user = this.usersRepository.create({...body, motdepasse : hash, ...body})
            await this.usersRepository.save(user)
            return "User Created !"
        }
        catch(error){
            throw new ConflictException(error.message)
        }
    }
    async postLogin(body: LoginDto) {
        const {motdepasse,pseudo} = body;
        const user = await this.usersRepository.findOne({where : {pseudo : pseudo }});
        if (!user) throw new NotFoundException("User not found");
        const match = await bcrypt.compare(motdepasse,user.motdepasse);
        if(!match) throw new UnauthorizedException("Invalid password");
        return user;
        }
    
}