import './style.css'
import Cliente from './model/Cliente'
import ListaCliente from './model/Lista'
import ListaClienteTemplate from './template/ListaClienteTemplate'


const initApp = (): void => {

  const formCliente = document.getElementById('formCliente') as HTMLFormElement

  const btnLimpar = document.getElementById('btnLimpar') as HTMLButtonElement
  btnLimpar.addEventListener('click', () => {
    const inputId = document.getElementById('inputId') as HTMLInputElement
    inputId.value = ""
    formCliente.reset()
  })

  formCliente.addEventListener('submit', (event: SubmitEvent): void => {
    event.preventDefault()

    const inputNome = document.getElementById('inputNome') as HTMLInputElement
    const inputId = document.getElementById('inputId') as HTMLInputElement
    const divMensagem = document.getElementById('mensagem') as HTMLInputElement


    // validação de campo obrigatório nome do cliente
    if (inputNome.value == "" || inputNome.value == null) {
      divMensagem.innerHTML = "Nome do cliente é obrigatório"
      return
    }

    let cliente: Cliente

    if (inputId.value == "" || inputId.value == null) {
      cliente = new Cliente(inputNome.value)
    } else {
      cliente = new Cliente(Number(inputId.value), inputNome.value)

    }

    const clienteSalvo = ListaCliente.getIntance().salvar(cliente)
    console.log(clienteSalvo)
    formCliente.reset()
    ListaClienteTemplate.instance.renderizar(ListaCliente.getIntance())

  })

}

document.addEventListener('DOMContentLoaded', initApp)