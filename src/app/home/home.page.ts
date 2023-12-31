import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  artists: any;
  localArtists: any;
  song = {
    name: '',
    playing: false,
    preview_url: ''
  }

  currentSong: any;
  newTime: any;
  albumns: any;

  /*slides = [
    {
      tittle: "Titulo uno",
      img: "assets/images/trollface.jpg",
      icon: "accessibility-outline",
      description: "El 'Trollface' es un meme con una cara sonriente maliciosa que representa a personas que disfrutan molestando a otros en línea."
    },

    {
      tittle: "Titulo dos",
      img: "assets/images/rian.jpg",
      icon: "beer-outline",
      description: "'Bad Luck Brian' es un meme de internet que muestra a Kyle Craven con una expresión facial poco atractiva y un jersey de los años 80. El meme se hizo popular en 2012 al retratar a Ryan como alguien extremadamente desafortunado en situaciones cómicas."
    },
    
    {
      tittle: "Titulo tres",
      img: "assets/images/xdxdxd.jpg",
      icon: "barbell-outline",
      description: "El 'Trollface' es un meme con una cara sonriente maliciosa que representa a personas que disfrutan molestando a otros en línea."
    }
  ];*/

  constructor(private musicService: MusicService, private modalController: ModalController) {}

  ionViewDidEnter (){
    //Oteniendo los artistas
    this.musicService.getArtists().then(listArtists =>{
      this.artists = listArtists;
      //console.log(this.artists);
    })

    //Artistas locales
    this.localArtists = this.musicService.getArtistsFromJson().artists;
    //console.log(this.localArtists.artists);
    this.musicService.getAlbums().then(listAlbums =>{
      this.albumns = listAlbums;
    })
  }

  async showSongs(artist:any){
    //console.log(artist);
    const songs = await this.musicService.getArtistsTracks(artist.id);
    //console.log(songs);
    const modal = await this.modalController.create(
      {
        component: SongsModalPage,
        componentProps: {
          songs: songs,
          name: artist.name
        }
      }
    );
    modal.onDidDismiss().then(dataReturned =>{
      this.song = dataReturned.data;
    })
    return await modal.present();
  }

  async showAlbumSongs(album:any){
    //console.log(artist);
    const songs = await this.musicService.getAlbumsTracks(album.id);
    //console.log(songs);
    const modal = await this.modalController.create(
      {
        component: SongsModalPage,
        componentProps: {
          songs: songs,
          name: album.name
        }
      }
    );
    modal.onDidDismiss().then(dataReturned =>{
      this.song = dataReturned.data;
    })
    return await modal.present();
  }

  play() {
    this.currentSong = new Audio(this.song.preview_url);
    this.currentSong.play();
    this.currentSong.addEventListener("timeupdate", () => {
      this.newTime = (1 / (this.currentSong.duration) * this.currentSong.currentTime );
    })
    this.song.playing = true;
  }
  pause() {
    this.currentSong.pause();
    this.song.playing = false;
  }

  parseTime(time = "0.00"){
    if (time){
      const partTime = parseInt(time.toString().split(".")[0], 10);
      let minutes = Math.floor(partTime / 60).toString();
      if(minutes.length == 1){
        minutes = "0" + minutes;
      }
      let seconds = (partTime % 60 ).toString();
      if (seconds.length == 1){
        seconds = "0" + seconds;
      }
      return minutes + ":" + seconds;
    }else{
      return "0:00";
    }
  }
}
