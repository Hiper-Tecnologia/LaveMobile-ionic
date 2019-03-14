import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FuncionarioService } from '../../services/domain/funcionario.service';
import { FuncionarioDTO } from '../../models/funcionario.dto';

/**
 * Generated class for the FuncionariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    public funcionarioService: FuncionarioService) {
  }

  ionViewDidLoad() {
    this.funcionarioService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {
        console.log(error);
      });
  }
}
