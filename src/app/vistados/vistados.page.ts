import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-vistados',
  templateUrl: './vistados.page.html',
  styleUrls: ['./vistados.page.scss'],
})
export class VistadosPage implements OnInit {

  slides = [
    {
      tittle: "Trollface",
      img: "assets/images/trollface.jpg",
      icon: "accessibility-outline",
      description: "El 'Trollface' es un meme con una cara sonriente maliciosa que representa a personas que disfrutan molestando a otros en línea."
    },

    {
      tittle: "Bad Luck Rian",
      img: "assets/images/rian.jpg",
      icon: "beer-outline",
      description: "'Bad Luck Brian' es un meme de internet que muestra a Kyle Craven con una expresión facial poco atractiva y un jersey de los años 80. El meme se hizo popular en 2012 al retratar a Ryan como alguien extremadamente desafortunado en situaciones cómicas."
    },
    
    {
      tittle: "Pokerface",
      img: "assets/images/poker.jpg",
      icon: "barbell-outline",
      description: "'Poker Face' es un meme de internet que muestra a una mujer con una expresión facial neutra, utilizada para representar situaciones en las que se ocultan las emociones o se mantiene la compostura en momentos incómodos."
    }
  ];

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  returnHome() {
    this.router.navigateByUrl("/home");
    this.storage.set("introShow", true);
  }

}
