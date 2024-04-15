import {Cliente} from './Cliente';

export default class ListaCliente {

    static instance: ListaCliente =  new ListaCliente();
    private clientes:Cliente[]= [];
  

    adicionar(cliente: Cliente) {
        cliente.id = this.clientes.length + 1;
        this.clientes.push(cliente);
    }

    listar(): Cliente[] {
        return this.clientes;
    }
}