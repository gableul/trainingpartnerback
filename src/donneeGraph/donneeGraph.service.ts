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
                console.log("donnee : ",donnee)
                console.log("attribut : ", donnee.nomAttribut," valeur : ", donnee.valeur)
                const donneeGraph = new DonneeGraph();
                donneeGraph.nomAttribut = donnee.nomAttribut;
                donneeGraph.valeur = donnee.valeur;
                donneeGraph.idGraph = graphique.idGraph;
                const chart = this.graphiqueRepository.create(donneeGraph)
                console.log("donneGraph : ", donneeGraph)
                console.log(chart)
                await this.donneeGraphRepository.save(chart)
            }
            return "Chart create !"
        }
        catch(error){
            throw new ConflictException(error.message)
        }
    }
}
