import { Component } from '@angular/core';
import { Massage } from '../../interfaces/massage.interface';

@Component({
  selector: 'app-massages',
  standalone: true,
  imports: [],
  templateUrl: './massages.component.html',
  styleUrl: './massages.component.css',
})
export class MassagesComponent {
  massages: Massage[] = [
    {
      name: 'Masaje californiano',
      description:
        'Masaje armonioso con movimientos largos y fluidos que elimina el estrés y libera las tensiones musculares',
      image: '../../../assets/imgs/masaje-californiano.jpg',
    },
    {
      name: 'Masaje lomi-lomi',
      description:
        'Oleaje rítmico con sucesivos movimientos con las manos, codos, pulgares y nudillos y una amplia variedad de técnicas aplicadas con los antebrazos',
      image: '../../../assets/imgs/masaje-lomi-lomi.jpg',
    },
    {
      name: 'Masaje con piedras calientes',
      description:
        'Alivia la tensión muscular, mejora el flujo sanguíneo y alivia el dolor mediante el uso de piedras calientes',
      image: '../../../assets/imgs/masaje-piedras-calientes.jpg',
    },
    {
      name: 'Masaje craneal, facial y podal',
      description:
        'Alivia problemas provocados por el estrés, la ansiedad o las malas posturas, desbloqueando la presión y permitiendo mejor circulación en las zonas de la cara, cabeza y pies',
      image: '../../../assets/imgs/masaje-craneal.jpeg',
    },
  ];
}
