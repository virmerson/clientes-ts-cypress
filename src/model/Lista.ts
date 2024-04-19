import { Model } from './Model';

export default class Lista<T extends Model>  {
   
    private static instance:Lista<any> = new Lista();
    private lista:T[]=[];

    private constructor(){
        
    }
  
    public static getIntance<T extends Model>():Lista<T>{
        if (!Lista.instance){
            Lista.instance =  new Lista<T>();
        }
        return Lista.instance   
    }
    adicionar(model:T):T {
        model.id = this.lista.length + 1;
        this.lista.push(model);
        return model;
    }

    listar(): T[] {
        return this.lista;
    }

    remover(id: number) {
        this.lista = this.lista.filter((model) => model.id !== id);
    }

    atualizar(model: T) {
        this.lista = this.lista.map((c) => {
            if (c.id === model.id) {
                return model;
            }
            return c;
        });
    }

    salvar(model: T): T {
        if (model.id === 0) {
            return this.adicionar(model);
        } else {
            this.atualizar(model);
            return model;
        }
    }
}