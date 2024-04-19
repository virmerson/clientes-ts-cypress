import {expect, it} from "vitest"

import Lista from "../src/model/Lista";
import Produto from "../src/model/Produto";


it ("deve cadastrar um produto", () => {
    const lista = Lista.getIntance<Produto>();
    const produto = new Produto('Produto 1', 10, 1);
    lista.salvar(produto);
    expect(lista.listar()).toContain(produto);
});
