import Cliente from "../model/Cliente";
import ListaCliente from "../model/ListaCliente";
import DOMList from "../interface/DOMList";

export default class ListaClienteTemplate implements DOMList {

    ul:HTMLUListElement

    static instance: ListaClienteTemplate = new ListaClienteTemplate();

    constructor() {
        this.ul= document.getElementById('listaClientes')as HTMLUListElement
    }
    limpar(): void {
        throw new Error("Method not implemented.");
    }

    renderizar(ListaCliente:ListaCliente):void {
        const lista = ListaCliente.listar()
        const ul = document.getElementById('listaClientes') as HTMLUListElement
        ul.innerHTML = ''

      
        lista.forEach((cliente: Cliente) => {
            const li = document.createElement('li')
            li.textContent = `${cliente.id} | ${cliente.nome}`
            ul.appendChild(li)

            const buttonExcluir = document.createElement('button') as HTMLButtonElement
            buttonExcluir.textContent = 'Excluir'
            buttonExcluir.addEventListener('click', () => {
                if ( confirm(`Deseja excluir o cliente ${cliente.nome}?`)){
                    ListaCliente.remover(cliente.id)
                    this.renderizar(ListaCliente)
                }
            })

            const buttonEditar = document.createElement('button') as HTMLButtonElement
    
            
            buttonEditar.textContent = 'Editar'
            buttonEditar.addEventListener('click', () => {
                
                const novoNome = document.getElementById('inputNome') as HTMLInputElement
                novoNome.value = cliente.nome
                novoNome.focus()

                const inputId = document.getElementById('inputId') as HTMLInputElement
                inputId.value = cliente.id.toString()      
           
            })

            li.appendChild(buttonExcluir)
            li.appendChild(buttonEditar)

        })
    }

}
