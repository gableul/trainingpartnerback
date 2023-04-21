import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seance } from './seance.entity';

@Injectable()
export class SeanceService {
    constructor(
        @InjectRepository(Seance) 
        private readonly seanceRepository : Repository<Seance>,
    ){}

    async getSeance():Promise<Seance[]>{
        return await this.seanceRepository.find();
    }
}
