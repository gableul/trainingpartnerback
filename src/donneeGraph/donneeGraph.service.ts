import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DonneeGraph } from './donneeGraph.entity';
import { Graphique } from 'src/graphique/graphique.entity';
import { Repository } from 'typeorm';
import { DonneeGraphDto } from './Dto/donneeGraphDto';

@Injectable()
export class DonneeGraphService {
    constructor (
        @InjectRepository(DonneeGraph)
        private readonly donneeGraphRepository : Repository<DonneeGraph>,
        @InjectRepository(Graphique)
        private readonly graphiqueRepository : Repository<Graphique>
    ) {}

    async postDonneeGraph(body : DonneeGraphDto) : Promise<string> {
        console.log('Received request body',body)
        const graphique = await this.graphiqueRepository.findOneOrFail({ where : {idGraph : body.idGraph}});
        try{
            for (const donnee of body.donnees){
                console.log("donnee : ",donnee, donnee.nomAttribut)
                const donneeGraph = new DonneeGraph();
                donneeGraph.nomAttribut = donnee.nomAttribut;
                donneeGraph.valeur = donnee.valeur;
                donneeGraph.graphique = graphique;
                await this.donneeGraphRepository.save(donneeGraph)
            }
            return "Chart create !"
        }
        catch(error){
            throw new ConflictException(error.message)
        }
    }
}
