import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController, private navCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
  }

  closeMenu (){
    this.menu.close();
  }

  logOut (){
    this.navCtrl.navigateRoot("/login");
    this.storage.set("isUserLoggedIn", false);
  }

  returnIntro (){
    this.navCtrl.navigateRoot("/vistados");
  }

}
