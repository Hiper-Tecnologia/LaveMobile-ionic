import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
    public passadorService: PassadorService,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.presentLoading();
    this.funcionarioService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {
        loader.dismiss();
      });
    loader.dismiss();
  }

  addToPassador(funcionario: FuncionarioDTO) {
    console.log('Funcionário: '+funcionario.nome);
    console.log(this.passadorService.addFuncionario(funcionario));
    this.navCtrl.setRoot('PassadorPage');
   
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;
  }
}
