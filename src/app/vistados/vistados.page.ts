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
      tittle: "And Hell Followed With",
      img: "assets/images/andhfw.png",
      icon: "accessibility-outline",
      description: "And Hell Followed With fue una banda estadounidense de deathcore originaria de Detroit, Michigan. Se formaron en 2006 y se disolvieron en 2011. Durante su breve tiempo juntos, la banda dejó una impresión significativa en la escena del metal extremo. Caracterizados por su estilo brutal y técnico, And Hell Followed With destacó por su enfoque lírico en temas oscuros, violentos y apocalípticos. Sus letras a menudo abordaban temas como la muerte, el sufrimiento, la violencia y la aniquilación."
    },

    {
      tittle: "Inferi",
      img: "assets/images/inferilogo.jpg",
      icon: "beer-outline",
      description: "Inferi es una banda de death metal técnico originaria de Nashville, Tennessee, Estados Unidos. Fue fundada en 2006 por el guitarrista Malcolm Pugh, quien es el principal compositor y líder de la banda. Su estilo musical se caracteriza por una combinación de elementos de death metal melódico y progresivo, junto con una impresionante destreza técnica en sus interpretaciones. A lo largo de su carrera, Inferi ha lanzado varios álbumes aclamados por la crítica, incluyendo 'Divinity in War' (2007), 'The End of an Era' (2009), 'The Path of Apotheosis' (2014), y 'Revenant' (2018), entre otros. Sus letras a menudo exploran temas mitológicos, cósmicos y fantásticos."
    },
    
    {
      tittle: "Wretched",
      img: "assets/images/wretchedlogo.jpg",
      icon: "barbell-outline",
      description: "Wretched fue una banda estadounidense de death metal técnico y melódico originaria de Charlotte, Carolina del Norte. Se formaron en 2005 y alcanzaron reconocimiento en la escena del metal extremo gracias a su habilidad para combinar elementos técnicos, melódicos y brutales en su música. La banda era conocida por su enfoque lírico en temas oscuros y filosóficos, explorando conceptos como la existencia, la lucha interna y la naturaleza humana. Sus letras a menudo eran introspectivas y reflexivas, complementando la complejidad musical de sus canciones. A lo largo de su carrera, Wretched lanzó varios álbumes notables, incluyendo 'The Exodus of Autonomy' (2009), 'Beyond the Gate' (2010), y 'Cannibal' (2014), entre otros. Estos álbumes recibieron elogios por su impresionante destreza instrumental, rápidos riffs de guitarra y cambios de tiempo intrincados."
    },
    
    {
      tittle: "Thy Art Is Murder",
      img: "assets/images/murderlogo.png",
      icon: "barbell-outline",
      description: "Thy Art Is Murder es una banda australiana de deathcore formada en 2006 en Blacktown, Nueva Gales del Sur. Son conocidos por su brutalidad y su estilo agresivo que combina el death metal y el deathcore. La banda ha lanzado varios álbumes aclamados por la crítica, como 'Hate' (2012), 'Holy War' (2015) y 'Dear Desolation' (2017). Su música se caracteriza por la intensidad de sus riffs de guitarra, voces guturales poderosas y letras que abordan temas oscuros y sociales."
    },
    
    {
      tittle: "At The Throne Of Judgment",
      img: "assets/images/atlogo.jpg",
      icon: "barbell-outline",
      description: "At the Throne of Judgment fue una banda estadounidense de metalcore/melodic death metal formada en 2005 en Lebanon, Pennsylvania. La banda se destacó por su sonido técnico y melódico, fusionando elementos del metalcore con influencias del death metal melódico. En 2007, lanzaron su álbum debut titulado 'The Arcanum Order', el cual recibió elogios por su destreza instrumental y agresividad. La voz gutural y los intensos riffs de guitarra fueron rasgos distintivos de su estilo musical. A lo largo de su carrera, At the Throne of Judgment realizó giras y compartió escenario con otras bandas notables del género. Sin embargo, la banda se disolvió en 2010 después de una serie de cambios en la alineación y desafíos internos."
    }
  ];

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  returnHome() {
    this.router.navigateByUrl("/menu/home");
    this.storage.set("introShow", true);
  }

}
