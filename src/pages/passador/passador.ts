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

  itens: passadorItem[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public passadorService: PassadorService) {
  }

  ionViewDidLoad() {
    let passador = this.passadorService.getPassador();
    this.itens = passador.itens;
  }
  
  removeFuncionario(funcionario: FuncionarioDTO) {
    this.itens = this.passadorService.removeFuncionario(funcionario).itens;
  }

  increaseProducao(funcionario: FuncionarioDTO) {
    this.itens = this.passadorService.increaseProducao(funcionario).itens;
  }

  decreaseProducao(funcionario: FuncionarioDTO) {
    this.itens = this.passadorService.decreaseProducao(funcionario).itens;
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
