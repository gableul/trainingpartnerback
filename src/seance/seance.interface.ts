export interface Exercice{
    idExercice: number,
    idSeance: number,
    nbrSerie:number,
    nrbRep:number,
    poids:number,
    nom:string,
    tmpsRepos:number
}

export interface Seance {
    idSeance:number,
    userPseudo:string,
    nom:string,
    duree:string,
    nomSport:string,
    date:string,
}    