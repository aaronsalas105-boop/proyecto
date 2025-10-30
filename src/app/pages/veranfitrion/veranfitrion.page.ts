import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { mic, trophy, pizza, sparkles, musicalNotes, happy, gameController, gift } from 'ionicons/icons';

@Component({
  selector: 'app-veranfitrion',
  templateUrl: './veranfitrion.page.html',
  styleUrls: ['./veranfitrion.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class VerAnfitrionPage {
  constructor(private router: Router) {
    addIcons({ mic, trophy, pizza, sparkles, musicalNotes, happy, gameController, gift });
  }

  hosts = [
    {
      name: 'Chuck E. Cheese',
      species: 'Ratón',
      alias: 'El Líder del Show',
      image: '/assets/img/chuck.png',
      skills: [
        { icon: 'mic', tooltip: 'Canta y anima la fiesta' },
        { icon: 'game-controller', tooltip: 'Ama los videojuegos' },
        { icon: 'pizza', tooltip: 'Fan de la pizza con extra queso' }
      ],
      phrase: '"Donde un niño puede ser un niño."',
      description: 'Carismático, optimista y amante de los videojuegos. Es el anfitrión de la fiesta y el líder de la banda.',
    },
    {
      name: 'Helen Henny',
      species: 'Gallina',
      alias: 'La Estrella Musical',
      image: '/assets/img/helen.png',
      skills: [
        { icon: 'musical-notes', tooltip: 'Canta con pasión y estilo' },
        { icon: 'sparkles', tooltip: 'Encanta con su energía positiva' },
        { icon: 'happy', tooltip: 'Siempre alegre y optimista' }
      ],
      phrase: '"¡Cantar contigo hace que el día brille más!"',
      description: 'Dulce y talentosa vocalista de la banda. Le encanta la moda y los videojuegos.',
    },
    {
      name: 'Mr. Munch',
      species: 'Monstruo Morado',
      alias: 'El Rey de los Juegos',
      image: '/assets/img/munch.png',
      skills: [
        { icon: 'pizza', tooltip: 'Ama la pizza más que nada' },
        { icon: 'game-controller', tooltip: 'Fanático de los juegos' },
        { icon: 'happy', tooltip: 'Siempre hambriento y feliz' }
      ],
      phrase: '"¡Jugar conmigo es ganar siempre!"',
      description: 'Bonachón y torpe tecladista del grupo, obsesionado con la pizza y la diversión.',
    },
    {
      name: 'Jasper T. Jowls',
      species: 'Perro (Hound)',
      alias: 'El Amigo Aventurero',
      image: '/assets/img/jasper.png',
      skills: [
        { icon: 'trophy', tooltip: 'Competidor incansable' },
        { icon: 'game-controller', tooltip: 'Campeón de arcade' },
        { icon: 'happy', tooltip: 'Leal y amistoso' }
      ],
      phrase: '"¡Nada mejor que divertirse con los amigos!"',
      description: 'Perro vaquero relajado que ama la música country y las buenas aventuras.',
    },
    {
      name: 'Pasqually P. Pieplate',
      species: 'Humano',
      alias: 'El Chef Bromista',
      image: '/assets/img/pasqually.png',
      skills: [
        { icon: 'pizza', tooltip: 'Maestro pizzero italiano' },
        { icon: 'musical-notes', tooltip: 'Baterista con ritmo único' },
        { icon: 'happy', tooltip: 'Cuenta chistes todo el día' }
      ],
      phrase: '"¡Con pizza y risas, todo sabe mejor!"',
      description: 'Chef alegre con acento italiano, figura paternal y gran humorista del grupo.',
    },
    {
      name: 'Buddy the Fox',
      species: 'Zorro',
      alias: 'Amigo de Chuck E. Cheese',
      image: '/assets/img/buddy.png',
      skills: [
        { icon: 'gift', tooltip: 'Lleva diversión a todos' },
        { icon: 'sparkles', tooltip: 'Crea momentos mágicos' },
        { icon: 'happy', tooltip: 'Siempre con energía positiva' }
      ],
      phrase: '"¡Vamos a hacer de esta la mejor fiesta de todas!"',
      description: 'Nuevo integrante del equipo, lleno de energía, humor y listo para hacer reír a todos.',
    }
  ];

  selectHost(host: any) {
    this.router.navigate(['/formulariouno']);
  }
}
