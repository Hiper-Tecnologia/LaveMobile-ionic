import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FuncionarioService } from '../../services/domain/funcionario.service';
import { FuncionarioDTO } from "../../models/funcionario.dto";
import { PassadorService } from '../../services/domain/passador.service';

@IonicPage()
@Component({
  selector: 'page-funcionarios',
  templateUrl: 'funcionarios.html',
})
export class FuncionariosPage {

  items: FuncionarioDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public funcionarioService: FuncionarioService,
    public passadorService: PassadorService) {
  }

  ionViewDidLoad() {
    this.funcionarioService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {
        
      });
  }

  addToPassador(funcionario: FuncionarioDTO) {
    console.log('Funcionário: '+funcionario.nome);
    console.log(this.passadorService.addFuncionario(funcionario));
    this.navCtrl.setRoot('PassadorPage');
   
  }
}
