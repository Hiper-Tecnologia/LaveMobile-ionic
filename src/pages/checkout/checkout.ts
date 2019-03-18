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

  producao: PassadorDTO = {
    id : '',
    funcionarios: null,
    finalizacao: null,
    id_piloto_mestre: '',
    finalizado: '',
    operador:''
  }
  
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: StorageService,
              public passadorService: PassadorService
              ){
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
      finalizado : "1",
      finalizacao: null,
      funcionarios : lista.funcionarios.map(x => {return {quantidade: x.quantidade, funcionario: {id: x.funcionario.id}}})
    }
//    console.log("pegou o producao:"+this.producao.finalizado);
//    console.log(this.producao);
            

  
  }

  dadosCheckout() {
    console.log("enviou o form Conclusão / Checkout");
    this.producao.operador="xuxa";
    console.log(this.producao);
    this.navCtrl.setRoot('OrderConfirmationPage', {passador: this.producao});
    //console.log("Operador :"+this.producao.operador);
    //console.log("Lavado Lacre:"+this.producao.id_piloto_mestre);
    //console.log("Finalizado 0/1 :"+this.producao.finalizado);
    //console.log("Data finalização :"+this.producao.finalizacao.toDateString);        


  }

}
