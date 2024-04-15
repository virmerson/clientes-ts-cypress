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

    atualizar(cliente: Cliente) {
        this.clientes = this.clientes.map((c) => {
            if (c.id === cliente.id) {
                return cliente;
            }
            return c;
        });
    }

    salvar(cliente: Cliente): Cliente {
        if (cliente.id === 0) {
            return this.adicionar(cliente);
        } else {
            this.atualizar(cliente);
            return cliente;
        }
    }
}