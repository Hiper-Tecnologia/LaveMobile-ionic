import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PassadorDTO } from '../../models/passador.dto';
import { passadorItem } from '../../models/passador-item';
import { PassadorService } from '../../services/domain/passador.service';
import { PedidoService } from '../../services/domain/pedido.service';

@IonicPage()
@Component({
  selector: 'page-order-confirmation',
  templateUrl: 'order-confirmation.html',
})
export class OrderConfirmationPage {


  passador: PassadorDTO;
  itens: passadorItem[];
  codproducao: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public passadorService: PassadorService,
              public pedidoService: PedidoService) {
    
    this.passador =  this.navParams.get('passador');

  }

  ionViewDidLoad() {
    this.itens = this.passadorService.getPassador().itens;
  }
  
  total() {
    return this.passadorService.total();    
  }

  back() {
    this.navCtrl.setRoot('PassadorPage'); 
  }

  home(){
    this.navCtrl.setRoot('FuncionariosPage');
  }
  checkout() {
    this.pedidoService.insert(this.passador)
      .subscribe(response => {
        this.passadorService.createOrClearPassador();
         this.codproducao = this.extractId(response.headers.get('location'));
      },
      error => {
        if (error.status == 403) {
          this.navCtrl.setRoot('HomePage');
        }
      });
  }

  private extractId(location : string) : string {
    let position = location.lastIndexOf('/');
    return location.substring(position + 1, location.length);
  }
}
