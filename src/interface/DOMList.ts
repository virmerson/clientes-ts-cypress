import ListaCliente from "../model/Lista";

export default interface DOMList {
    ul:HTMLUListElement,
    limpar():void,
    renderizar(listaCliente:ListaCliente):void
}