import { Model } from "../interface/Model";

export default class Cliente implements Model {
    id: number;
    nome: string;

    constructor( id:number, nome: string) ;
    constructor(  nome: string) ;

    constructor( idOuNome: string | number, nome?: string) {
        
        if (typeof idOuNome === 'number') {
            this.id = idOuNome;
            this.nome = nome as string;
        }else{
            this.id = 0
            this.nome = idOuNome;
        }
    }
  
}