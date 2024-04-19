import {expect, it} from 'vitest'
import Cliente from '../src/model/Cliente'
import Lista from '../src/model/Lista'

it("Should create a new Client", ()=>{
    Lista.getIntance<Cliente>().adicionar(new Cliente(123, "12345678901" ))
    expect(Lista.getIntance().listar().length).toBe(1)
    //expect(Lista.getIntance().listar()[0].id).toEqual(123)
})