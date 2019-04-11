import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {DetailPage} from '../detail/detail';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  myList = [];
  arrList = [];
  rcmdList = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private myClient: HttpClient
  ) {
  }

  ionViewDidLoad() {
    var url = 'http://localhost:8080/index';
    this.myClient.get(url).subscribe((result: any) => {
      this.myList = result.carouselItems;
      this.arrList = result.newArrialItems;
      this.rcmdList = result.recommendedItems;
    })
  } 
  jump(pid){
    this.navCtrl.push(DetailPage,{pid})
  }
}
