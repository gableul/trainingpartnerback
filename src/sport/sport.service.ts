import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sport } from './sport.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SportService {
    constructor (
        @InjectRepository(Sport)
        private readonly sportRepository : Repository<Sport>,
    ){}

    async getSport(){
        const chart = await this.sportRepository.find()
        console.log(chart)
        return chart;
    }
}
