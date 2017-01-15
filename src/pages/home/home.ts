import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Page2 } from '../page2/page2';
import { PathForm } from '../forms/pathForm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class Home {

  item: {title: string, note: string, icon: string};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = {
      title : 'Item ' + 1,
      note : 'This is item #' + 1,
      icon : 'wifi'
    }
  }

  clicked() {
    this.navCtrl.push(PathForm, {
      item: this.item
    });
  }
}
