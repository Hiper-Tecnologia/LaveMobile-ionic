import { Injectable } from "@angular/core";
import { StorageService } from "../storage.services";
import { Passador } from "../../models/passador";
import { FuncionarioDTO } from "../../models/funcionario.dto";

@Injectable()
export class PassadorService {

    constructor(public storage: StorageService) {

    }

    createOrClearPassador() : Passador {
        let passador: Passador = {itens: []};
        this.storage.setPassador(passador);
        return passador;
    }

    getPassador() : Passador {
        let passador: Passador = this.storage.getPassador();
        if (passador == null) {
            passador = this.createOrClearPassador();
        }
        return passador;
    }

    addFuncionario(func: FuncionarioDTO) : Passador {
        let passador = this.getPassador();
        let position = passador.itens.findIndex(x => x.funcionario.id == func.id);
        if (position == -1) {
            passador.itens.push({quantidade: 1, funcionario: func});
        }
        this.storage.setPassador(passador);
        return passador;
    }

    removeFuncionario(func: FuncionarioDTO) : Passador {
        let passador = this.getPassador();
        let position = passador.itens.findIndex(x => x.funcionario.id == func.id);
        if (position != -1) {
            passador.itens.splice(position,1);
        }
        this.storage.setPassador(passador);
        return passador;
    }
    
    increaseProducao(func: FuncionarioDTO) : Passador {
        let passador = this.getPassador();
        let position = passador.itens.findIndex(x => x.funcionario.id == func.id);
        if (position != -1) {
            passador.itens[position].quantidade++;
        }
        this.storage.setPassador(passador);
        return passador;
    }

    decreaseProducao(func: FuncionarioDTO) : Passador {
        let passador = this.getPassador();
        let position = passador.itens.findIndex(x => x.funcionario.id == func.id);
        if (position != -1) {
            passador.itens[position].quantidade--;
            if (passador.itens[position].quantidade < 1) {
                passador = this.removeFuncionario(func);
            }
        }
        this.storage.setPassador(passador);
        return passador;
    }

    total() : number {
        let passador = this.getPassador();
        let sum = 0;
        for (var i=0; i<passador.itens.length; i++) {
            sum += passador.itens[i].quantidade;
        }
        return sum;
    }

}