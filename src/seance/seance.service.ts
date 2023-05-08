import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, Repository, createQueryBuilder } from 'typeorm';
import { Seance } from './seance.entity';
import { SeanceDto } from './Dto/seanceDto';
import { User } from 'src/user/user.entity';

@Injectable()
export class SeanceService {
    constructor(
        @InjectRepository(Seance) 
        private readonly seanceRepository : Repository<Seance>,
        @InjectRepository(User) 
        private readonly usersRepository : Repository<User>,
    ){}

    async getSeance(pseudo :string):Promise<Seance[]>{
        const user = await this.usersRepository.findOne({ where : {pseudo : pseudo}})
        const seance = await this.seanceRepository.find({where : {user : user}});
        return seance;
    }

    async postSeanceCreate(body : SeanceDto, pseudo : string) : Promise<number> {
        console.log('Received request body',body)
        try{
            const seance = this.seanceRepository.create(body)
            const user = await this.usersRepository.findOneOrFail({ where : {pseudo : pseudo}})
            seance.user = user
            console.log("chart : ", seance)
            const graphique =  await this.seanceRepository.save(seance)
            return graphique.idSeance;
        }
        catch(error){
            console.log(error)
            throw new ConflictException(error.message)
        }
    }
}
