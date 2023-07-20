import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
})
export class SongsModalPage implements OnInit {
  songs: any;
  name: any;

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.songs = this.navParams.data['songs'];
    this.name = this.navParams.data['name'];
  }

  async returnHome (){
    await this.modalController.dismiss();
  }

  async selectSong (song: any){
    await this.modalController.dismiss(song);
  }

}
