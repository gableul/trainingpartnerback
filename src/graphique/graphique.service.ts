import { ConflictException, Injectable } from '@nestjs/common';
import { Graphique } from './graphique.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GraphiqueDto } from './Dto/graphiqueDto';
import { User } from 'src/user/user.entity';
import { DonneeGraph } from 'src/donneeGraph/donneeGraph.entity';

@Injectable()
export class GraphiqueService {
    constructor (
        @InjectRepository(User)
        private readonly usersRepository : Repository<User>,
        @InjectRepository(Graphique)
        private readonly graphiqueRepository : Repository<Graphique>,
        @InjectRepository(DonneeGraph)
        private readonly donneeGraphRepository : Repository<DonneeGraph>,
    ) {}

    async postChartCreate(body : GraphiqueDto, pseudo : string) : Promise<number> {
        console.log('Received request body',body)
        try{
            const chart = this.graphiqueRepository.create(body)
            const user = await this.usersRepository.findOneOrFail({ where : {pseudo : pseudo}})
            chart.user = user
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
