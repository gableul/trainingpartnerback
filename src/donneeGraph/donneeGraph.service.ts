import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DonneeGraph } from './donneeGraph.entity';
import { Repository } from 'typeorm';
import { DonneeGraphDto } from './Dto/donneeGraphDto';

@Injectable()
export class DonneeGraphService {
    constructor (
        @InjectRepository(DonneeGraph)
        private readonly donneeGraphRepository : Repository<DonneeGraph>
    ) {}

    async postDonneeGraph(body : DonneeGraphDto) : Promise<string> {
        console.log('Received request body',body)
        try{
            const chart = this.donneeGraphRepository.create()
            await this.donneeGraphRepository.save(chart)
            return "Chart create !"
        }
        catch(error){
            throw new ConflictException(error.message)
        }
    }
}
