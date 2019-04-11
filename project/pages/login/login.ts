import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  uname = '';
  upwd = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private myClient: HttpClient
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  doLogin() {
    var uname = this.uname,
      upwd = this.upwd;
    this.myClient.post('http://localhost:8080/user/login',{uname,upwd})
      .subscribe((result) => {
        var code=result.code;
        if(code==200){
          
        }
      })
  }
}
