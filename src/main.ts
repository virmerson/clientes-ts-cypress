import './style.css'
import  Cliente  from './model/Cliente'
import  ListaCliente  from './model/Lista'
import ListaClienteTemplate from './template/ListaClienteTemplate'


const initApp = ():void=>{
 
  const formCliente = document.getElementById('formCliente') as HTMLFormElement
 
  const btnLimpar =  document.getElementById('btnLimpar') as HTMLButtonElement
  btnLimpar.addEventListener('click', () => {  
    const inputId = document.getElementById('inputId') as HTMLInputElement
    inputId.value = ""
    formCliente.reset()
  })

  formCliente.addEventListener('submit', (event:SubmitEvent):void => { 
    event.preventDefault()

    const inputNome = document.getElementById('inputNome') as HTMLInputElement
    const inputId = document.getElementById('inputId') as HTMLInputElement
    
    let cliente:Cliente 
    
    if( inputId.value=="" || inputId.value==null){
      cliente = new Cliente(inputNome.value)
    }else { 
      cliente = new Cliente(Number(inputId.value), inputNome.value)
    
    }

    const clienteSalvo=  ListaCliente.instance.salvar(cliente)
    console.log(clienteSalvo)
    formCliente.reset()
    ListaClienteTemplate.instance.renderizar(ListaCliente.instance)

  })
  
}

document.addEventListener('DOMContentLoaded', initApp)