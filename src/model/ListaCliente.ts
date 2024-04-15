import {Cliente} from './Cliente';

export default class ListaCliente {

    static instance: ListaCliente =  new ListaCliente();
    private clientes:Cliente[]= [];
  

    adicionar(cliente:Cliente):Cliente {
        cliente.id = this.clientes.length + 1;
        this.clientes.push(cliente);
        return cliente;
    }

    listar(): Cliente[] {
        return this.clientes;
    }

    remover(id: number) {
        this.clientes = this.clientes.filter((cliente) => cliente.id !== id);
    }
}