import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  artists: any;
  localArtists: any;

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

  constructor(private musicService: MusicService) {}

  ionViewDidEnter (){
    this.musicService.getArtists().then(listArtists =>{
      this.artists = listArtists;
      console.log(this.artists);
    })

    this.localArtists = this.musicService.getArtistsFromJson().artists;
    console.log(this.localArtists.artists);
  }
}
