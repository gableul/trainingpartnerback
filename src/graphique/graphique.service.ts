import { ConflictException, Injectable } from '@nestjs/common';
import { Graphique } from './graphique.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GraphiqueDto } from './Dto/graphiqueDto';

@Injectable()
export class GraphiqueService {
    constructor (
        @InjectRepository(Graphique)
        private readonly graphiqueRepository : Repository<Graphique>
    ) {}

    async postChartCreate(body : GraphiqueDto) : Promise<number> {
        console.log('Received request body',body)
        try{
            const chart = this.graphiqueRepository.create(body)
            console.log("chart : ", chart)
            const graphique =  await this.graphiqueRepository.save(chart)
            return graphique.idGraph;
        }
        catch(error){
            console.log(error)
            throw new ConflictException(error.message)
        }
    }
}
