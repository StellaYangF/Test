import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../login/login';
import {NotFoundPage} from '../not-found/not-found';
import {CartPage} from '../cart/cart';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  picList = [];
  title = '';
  subtitle = '';
  price = '';
  lid='';
  cart=CartPage;
  notFound=NotFoundPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private myClient: HttpClient,
    private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    var pid = this.navParams.get('pid');
    this.myClient.get(`http://localhost:8080/product/detail?lid=` + pid)
      .subscribe((result: any) => {
        this.picList = result.details.picList;
        this.title = result.details.title;
        this.subtitle = result.details.subtitle;
        this.price = result.details.price;
        this.lid=result.details.lid;
      })
  }
  addToCart(lid=this.lid) {
    this.myClient.get('http://localhost:8080/cart/add?buyCount=1&lid=' + lid).subscribe((result: any) => {
      var code = result.code;
      if (code == 300) {
        // 跳转到login
        this.navCtrl.push(LoginPage);
      } else if (code == 200) {
        // toast
        this.showToast('添加成功');
      }else{
        this.showToast('添加失败')
      }
    });
  }
  showToast(msg) {
    var myToast = this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'middle',
      showCloseButton: true,
      closeButtonText: '关闭'
    });
    myToast.present();
  }
}
