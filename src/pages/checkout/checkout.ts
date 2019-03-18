import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { StorageService } from '../../services/storage.services';
import { PassadorDTO } from '../../models/passador.dto';
import { PassadorService } from '../../services/domain/passador.service';
import { Passador } from '../../models/passador';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  lista: Passador;
  //producao: PassadorDTO;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: StorageService,
              public passadorService: PassadorService
              ){
            }

            producao: PassadorDTO = {
              id : '',
              itens: null ,
              finalizacao: null,
              id_piloto_mestre: '0',
              finalizado: '',
              operador:''
            }
  

  ionViewDidLoad() {
    console.log("chegou no checkout");

    let lista = this.passadorService.getPassador();
    
    console.log("pegou a lista");
    
    this

    //let localUser = this.storage.getLocalUser();
    //if (localUser && localUser.login) {
    //  this.producao.operador = localUser.login;
   // }
    
      this.producao = {
      itens : lista.itens.map(x => {return {quantidade: x.quantidade, funcionario: {id: x.funcionario.id}}})
    }
//    console.log("pegou o producao:"+this.producao.finalizado);
  
  }

  dadosCheckout() {
    let localUser = this.storage.getLocalUser();
    this.producao.operador=localUser.login;
    //this.producao.id_piloto_mestre="123426";
    this.producao.finalizado="1";
    //this.producao.finalizacao = Date.now();
    //console.log(this.producao);
    //console.log(this.producao.itens);
    this.navCtrl.setRoot('OrderConfirmationPage', {passador: this.producao});
    //console.log("Operador :"+this.producao.operador);
    //console.log("Lavado Lacre:"+this.producao.id_piloto_mestre);
    //console.log("Finalizado 0/1 :"+this.producao.finalizado);
    //console.log("Data finalização :"+this.producao.finalizacao.toDateString);        


  }

}
