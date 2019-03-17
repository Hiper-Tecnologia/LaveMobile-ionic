import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { passadorItem } from '../../models/passador-item';
import { PassadorService } from '../../services/domain/passador.service';

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

}
