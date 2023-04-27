import { ConflictException, Injectable } from '@nestjs/common';
import { Graphique } from './graphique.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GraphiqueDto } from './Dto/graphiqueDto';
import { User } from 'src/user/user.entity';

@Injectable()
export class GraphiqueService {
    constructor (
        @InjectRepository(User)
        private readonly usersRepository : Repository<User>,
        @InjectRepository(Graphique)
        private readonly graphiqueRepository : Repository<Graphique>,
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
    async postChart(pseudo : string){
        const user = await this.usersRepository.find({ where : {pseudo : pseudo}})//{order : {created_at : *DESC*}})
        const chart = await this.graphiqueRepository.find({where : {user : user}})
        return chart;
    }
}
