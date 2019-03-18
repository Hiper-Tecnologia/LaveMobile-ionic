import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { passadorItem } from '../../models/passador-item';
import { PassadorService } from '../../services/domain/passador.service';
import { FuncionarioDTO } from "../../models/funcionario.dto";

@IonicPage()
@Component({
  selector: 'page-passador',
  templateUrl: 'passador.html',
})
export class PassadorPage {

  funcionarios: passadorItem[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public passadorService: PassadorService) {
  }

  ionViewDidLoad() {
    let passador = this.passadorService.getPassador();
    this.funcionarios = passador.funcionarios;
  }
  
  removeFuncionario(funcionario: FuncionarioDTO) {
    this.funcionarios = this.passadorService.removeFuncionario(funcionario).funcionarios;
  }

  increaseProducao(funcionario: FuncionarioDTO) {
    this.funcionarios = this.passadorService.increaseProducao(funcionario).funcionarios;
  }

  decreaseProducao(funcionario: FuncionarioDTO) {
    this.funcionarios = this.passadorService.decreaseProducao(funcionario).funcionarios;
  }

  total() : number {
    return this.passadorService.total();
  }

  goOn() {
    this.navCtrl.setRoot('FuncionariosPage');
  }

  checkout() {
    this.navCtrl.push('CheckoutPage');
  }
}
