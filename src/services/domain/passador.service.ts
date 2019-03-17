import { Injectable } from "@angular/core";
import { StorageService } from "../storage.services";
import { Passador } from "../../models/passador";
import { FuncionarioDTO } from "../../models/funcionario.dto";

@Injectable()
export class PassadorService {

    constructor(public storage: StorageService) {

    }

    createOrClearPassador() : Passador {
        console.log('em passador service');
        let passador: Passador = {funcionarios: []};
        this.storage.setPassador(passador);
        console.log('criou passador em passador service :'+passador.funcionarios[0].quantidade);        
        return passador;
    }

    getPassador() : Passador {
        let passador: Passador = this.storage.getPassador();
        if (passador == null) {
            passador = this.createOrClearPassador();
        }
        return passador;
    }

    addFuncionario(funcionario: FuncionarioDTO) : Passador {
        let passador = this.getPassador();
        let position = passador.funcionarios.findIndex(x => x.funcionario.id == funcionario.id);
        if (position == -1) {
            passador.funcionarios.push({quantidade: 1, funcionario: funcionario});
        }
        this.storage.setPassador(passador);
        return passador;
    }
}