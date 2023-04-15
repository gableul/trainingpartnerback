import { Injectable,Get } from '@nestjs/common';
import { Exercice } from './seance.interface';

@Injectable()
export class SeanceService {
    private seanceID:number;
    private exercices: Exercice[];
    private muscleTravailler;


    constructor(seanceID: number, exercices: Exercice[]) {
        this.seanceID = seanceID;
        this.exercices = exercices;
        this.muscleTravailler={
            "pec":0,
            "dos":0,
            "jambe":0,
            "biceps": 0,
            "triceps": 0,
          };
      }

    @Get()
    getExercice(){
        const exSeance= new Array<Exercice>();
        this.exercices.forEach(ex => {
            if( ex.idSeance===this.seanceID){
                exSeance.push(ex);
            }
            
        });
        return exSeance;
    }

    @Get()
    getMuscle(){
        const exercice=this.getExercice();
        exercice.forEach(ex =>{
        switch(ex.nom.toLowerCase()){
            case 'dc':
            case 'dvp':
            case 'devellope couche':
            case 'développé couché':
                this.muscleTravailler["pec"]+=ex.nrbRep;
            case 'sdt':
            case 'souleve de terre':
            case 'soulevé de terre':
                this.muscleTravailler["dos"]+=ex.nrbRep;
            case 'squat':
            case 'presse':
            case 'leg':
            case 'squat machine':
            case 'presses à cuisses':
            case 'leg extension':
            case 'leg curl':
                this.muscleTravailler["jambe"]+=ex.nrbRep;
            case 'curl':
            case 'biceps':
                this.muscleTravailler["biceps"]+=ex.nrbRep;
            case 'triceps extension':
            case 'barre au front':
            case 'developpe militaire':
                this.muscleTravailler["triceps"]+=ex.nrbRep;
            default:
                return '';
        }})
      }
      @Get()
      getMuscleTravailler(){
        return this.muscleTravailler;
      }

      @Get()
      getLessWorkedMuscle(){
        let muscle:string ="pec";
        let min:number =this.getMuscle["pec"];
        for(const part in this.getMuscleTravailler()){
            if(this.getMuscle[part]<min){
                min=this.getMuscle[part];
                muscle=part;
            }
        }
      }
}
