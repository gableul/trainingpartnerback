import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seance } from './seance.entity';
import { SeanceDto } from './Dto/seanceDto';

@Injectable()
export class SeanceService {
    constructor(
        @InjectRepository(Seance) 
        private readonly seanceRepository : Repository<Seance>,
    ){}

    async getSeance():Promise<Seance[]>{
        return await this.seanceRepository.find();
    }

    async postSeanceCreate(body : SeanceDto) : Promise<number> {
        console.log('Received request body',body)
        try{
            const seance = this.seanceRepository.create(body)
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
