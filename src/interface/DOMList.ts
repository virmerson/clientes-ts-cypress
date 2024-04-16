import ListaCliente from "../model/ListaCliente";

export default interface DOMList {
    ul:HTMLUListElement,
    limpar():void,
    renderizar(listaCliente:ListaCliente):void
}