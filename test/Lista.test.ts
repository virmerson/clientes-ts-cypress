import { expect, it , describe } from "vitest";
import Lista from "../src/model/Lista";
import Produto from "../src/model/Produto";
import Cliente from "../src/model/Cliente";


describe("Teste de lista", () => {


    it  ("Deve instanciar uma lista de Produto ", ()=>{

        const lista = Lista.getIntance<Produto>();
        expect(lista).toBeDefined();
        expect(lista).toBeInstanceOf(Lista);
        //expect(lista.listar()).toHaveLength(0);
    
    })


    it  ("Deve instanciar cadastrar Produto ", ()=>{

        const lista = Lista.getIntance<Produto>();
        const produto = new Produto('Produto 1', 10, 1);
        const novo = lista.salvar(produto);
        expect(novo.id).toBe(1);
        expect(lista.listar()).toContain(produto);
    
    })


    it  ("Deve instanciar uma lista de Cliente ", ()=>{

        const lista = Lista.getIntance<Cliente>();
        expect(lista).toBeDefined();
        expect(lista).toBeInstanceOf(Lista);
       // expect(lista.listar()).toHaveLength(0);
    
    })


})