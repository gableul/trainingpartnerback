import { ConflictException, Injectable } from '@nestjs/common';
import { Graphique } from './graphique.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GraphiqueDto } from './Dto/graphiqueDto';
import { User } from 'src/user/user.entity';

@Injectable()
export class GraphiqueService {
    constructor (
        @InjectRepository(Graphique)
        private readonly graphiqueRepository : Repository<Graphique>
    ) {}

    async postChartCreate(body : GraphiqueDto) : Promise<Graphique> {
        console.log('Received request body',body)
        try{
            const chart = this.graphiqueRepository.create(body)
            return  await this.graphiqueRepository.save(chart)
        }
        catch(error){
            console.log(error)
            throw new ConflictException(error.message)
        }
    }
}
