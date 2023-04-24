import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DonneeGraph } from './donneeGraph.entity';
import { Graphique } from 'src/graphique/graphique.entity';
import { Repository } from 'typeorm';
import { DonneeGraphDto } from './Dto/donneeGraphDto';
import { User } from 'src/user/user.entity';

@Injectable()
export class DonneeGraphService {
    constructor (
        @InjectRepository(DonneeGraph)
        private readonly donneeGraphRepository : Repository<DonneeGraph>,
        @InjectRepository(Graphique)
        private readonly graphiqueRepository : Repository<Graphique>,
        @InjectRepository(User)
        private readonly usersRepository : Repository<User>
    ) {}

    async postDonneeGraph(body : DonneeGraphDto) : Promise<string> {
        console.log('Received request body',body)
        const graphique = await this.graphiqueRepository.findOneOrFail({ where : {idGraph : body.idGraph}});
        const user = await this.usersRepository.findOneOrFail({ where : {pseudo : body.userPseudo}})
        try{
            for (const donnee of body.donnees){
                const nomAttribut = donnee.nomAttribut;
                const valeur = donnee.valeur;
                console.log("donnee : ",donnee)
                console.log("attribut : ", nomAttribut," valeur : ", valeur)
                const chart = this.donneeGraphRepository.create({ nomAttribut, valeur, graphique, user})
                console.log(chart)
                this.donneeGraphRepository.save(chart)
            }
            return "Chart create !"
        }
        catch(error){
            throw new ConflictException(error.message)
        }
    }
}