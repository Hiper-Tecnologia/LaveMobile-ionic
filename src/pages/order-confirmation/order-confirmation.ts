import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PassadorDTO } from '../../models/passador.dto';
import { passadorItem } from '../../models/passador-item';
import { PassadorService } from '../../services/domain/passador.service';
import { FuncionarioDTO } from '../../models/funcionario.dto';

@IonicPage()
@Component({
  selector: 'page-order-confirmation',
  templateUrl: 'order-confirmation.html',
})
export class OrderConfirmationPage {


  passador : PassadorDTO;
  funcionarios: passadorItem[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public passadorService: PassadorService) {
    
    this.passador =  this.navParams.get('passador');

  }

  ionViewDidLoad() {
    if (this.passador.id_piloto_mestre == null) {
      this.navCtrl.setRoot('HomePage');
    } error => {this.navCtrl.setRoot('HomePage')}
    
    this.funcionarios = this.passadorService.getPassador().funcionarios;
  }

  total() {
    return this.passadorService.total();    
  }

}
