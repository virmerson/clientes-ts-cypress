import { Model } from './Model';
export default class Produto implements Model {
    id: number = 0;
    nome: string = '';
    preco: number = 0;
    quantidade: number = 0;
    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}