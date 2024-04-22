import Lista from "../model/Lista";
import { Model } from "./Model";

export default interface DOMList<T extends Model> {
    ul:HTMLUListElement,
    limpar():void,
    renderizar(lista:Lista<T>):void  //
}