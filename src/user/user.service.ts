import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from './Dtos/signUpDto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './Dtos/loginDto';
import { ProfilDto } from './Dtos/profilDto';

@Injectable()
export class UserService {
    constructor (
        @InjectRepository(User)
        private readonly usersRepository : Repository<User>
    ) {}

    async postSignUp(body : SignUpDto) : Promise<string> {
        console.log('Received request body',body)
        try{
            const {motDePasse} = body;
            const hash = await bcrypt.hash(motDePasse,10)
            const user = this.usersRepository.create({...body, motDePasse : hash})
            await this.usersRepository.save(user)
            return "User Created !"
        }
        catch(error){
            throw new ConflictException(error.message)
        }
    }

    async postLogin(body: LoginDto) {
        const {motDePasse,pseudo} = body;
        const user = await this.usersRepository.findOne({where : {pseudo : pseudo }});
        if (!user) throw new NotFoundException("User not found");
        const match = await bcrypt.compare(motDePasse,user.motDePasse);
        if(!match) throw new UnauthorizedException("Invalid password");
        return user;
    }

    postLogout(session : Record<string,any>){
        if (session){
            session.destroy((err)=>{
                if(err){
                    console.log("Failed to disconnected session !",err);
                }
            })
        }
    }

    async postUser(body: ProfilDto) {
        const {pseudo} = body;
        
        try{
            const user = await this.usersRepository.findOneOrFail({where : {pseudo : pseudo }});
            return user;
        }catch(error){
            throw new NotFoundException('User with pseudo ${pseudo } not found');
        }
    }

    // async setUser(body : ProfilDto): Promise<User>{
    //     const {pseudo, newPseudo} = body;
    //     try{
    //         const user = await this.usersRepository.findOneOrFail({ where : {pseudo : pseudo}})
    //         user.pseudo = newPseudo;
    //         await this.usersRepository.save(user)
    //         this.deleteUser(pseudo);
    //         return user;
    //     }
    //     catch (error){
    //         throw new NotFoundException(`User with pseudo ${ pseudo } not found`);
    //     }
    // }  
    async User(pseudo : string): Promise<User>{
        try{
            const user = await this.usersRepository.findOneOrFail({ where : {pseudo : pseudo}})
            return user;
        }
        catch (error){
            throw new NotFoundException(`User with pseudo ${ pseudo } not found`);
        }
    }


    async deleteUser (pseudo : string) : Promise<void>{
        await this.usersRepository.delete({pseudo : pseudo});
    }
}
