import {Cliente} from "../model/Cliente";
import ListaCliente from "../model/ListaCliente";

export default class ListaClienteTemplate {

    static instance: ListaClienteTemplate = new ListaClienteTemplate();
    constructor() {

    }

    render(ListaCliente:ListaCliente) {
        const lista = ListaCliente.listar()
        const ul = document.getElementById('listaClientes') as HTMLUListElement
        ul.innerHTML = ''
        lista.forEach((cliente: Cliente) => {
            const li = document.createElement('li')
            li.textContent = `${cliente.id} | ${cliente.nome}`
            ul.appendChild(li)
        })
    }

}
