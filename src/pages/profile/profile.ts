import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.services';
import { FuncionarioDTO } from '../../models/funcionario.dto';
import { FuncionarioService } from '../../services/domain/funcionario.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  //login: string;
  funcionario: FuncionarioDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService,
    public funcionarioService: FuncionarioService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.login) {
      this.funcionarioService.findByLogin(localUser.login)
        .subscribe(response => {
          this.funcionario = response;
          //buscar imagem
        }, 
        error =>{
          if (error.status == 403) {
            this.navCtrl.setRoot('HomePage');
          }
        });
    }
    else {
      this.navCtrl.setRoot('HomePage');
    }
  }



}
