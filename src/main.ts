import './style.css'
import { Cliente } from './model/Cliente'
import  ListaCliente  from './model/ListaCliente'
import ListaClienteTemplate from './template/ListaClienteTemplate'


const initApp = ():void=>{
 
  const formCliente = document.getElementById('formCliente') as HTMLFormElement
  const buttonListar =  document.getElementById('buttonListar') as HTMLButtonElement
  
  buttonListar.addEventListener('click', ():void => { 

  ListaClienteTemplate.instance.render(ListaCliente.instance)
   
  })

  formCliente.addEventListener('submit', (event:SubmitEvent):void => { 
    event.preventDefault()

    const inputNome = document.getElementById('inputNome') as HTMLInputElement
  
    const cliente:Cliente = new Cliente(inputNome.value)

    const novoCliente=  ListaCliente.instance.adicionar(cliente)
    console.log(novoCliente)

  })
  
}

document.addEventListener('DOMContentLoaded', initApp)