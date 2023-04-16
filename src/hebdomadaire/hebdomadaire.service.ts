import { Get, Injectable } from '@nestjs/common';
import { Exercice, Seance } from 'src/seance/seance.interface';
import { SeanceService } from 'src/seance/seance.service';


@Injectable()
export class HebdomadaireService {
    private date:Date;
    private seances: Seance[];
    private muscleTravailler;

    constructor(date: Date,seance: Seance[]){
        this.date=date;
        this.seances=seance;
        this.muscleTravailler={
            "pec":0,
            "dos":0,
            "jambe":0,
            "biceps": 0,
            "triceps": 0,
          };
    }

    @Get()
    getSeance(){
        const seanceHebdo= new Array<Seance>();
        const dateDebutSemaine = new Date(this.date);
        const diff = dateDebutSemaine.getDay() - 1;
        dateDebutSemaine.setDate(dateDebutSemaine.getDate() - diff);
        const dateFinSemaine = new Date(dateDebutSemaine);
        dateFinSemaine.setDate(dateFinSemaine.getDate() + 6);
        this.seances.forEach(seance=>{
            if(seance.date>=dateDebutSemaine && seance.date<=dateFinSemaine){
                seanceHebdo.push(seance);
            }
        });
        return seanceHebdo;
    };



    @Get()
    getLessWorkedMuscle(){
        const seance=this.getSeance();
        seance.forEach(se=>{
            const s=new SeanceService(se.idSeance,[]); 
            const muscle=s.getMuscle();
            this.muscleTravailler["pec"]+=muscle["pec"];
            this.muscleTravailler["dos"]+=muscle["dos"];
            this.muscleTravailler["jambe"]+=muscle["jambe"];
            this.muscleTravailler["biceps"]+=muscle["biceps"];
            this.muscleTravailler["triceps"]+=muscle["triceps"];
        });
        let muscle:string ="pec";
        let min:number =this.muscleTravailler["pec"];
        for(const part in this.muscleTravailler){
            if(this.muscleTravailler[part]<min){
                min=this.muscleTravailler[part];
                muscle=part;
            }
        };
        return 'Le muscle le moins travailer est'+muscle+"avec "+min+"repetition dans la semaines"+this.date;
    }
}

