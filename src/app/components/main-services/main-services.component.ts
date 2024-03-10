import { Component } from '@angular/core';
import { Service } from '../../interfaces/service.interface';

@Component({
  selector: 'app-main-services',
  standalone: true,
  imports: [],
  templateUrl: './main-services.component.html',
  styleUrl: './main-services.component.css',
})
export class MainServicesComponent {
  services: Service[] = [
    {
      name: 'Quiromasaje',
      description:
        'Técnica con presión que ayudan a calmar el dolor de lumbalgias, cervicalgias, fibromialgias y ayudar a eliminar el estrés.',
      icon: 'fa-solid fa-hands-praying',
    },
    {
      name: 'Reflexología podal',
      description:
        'Técnica oriental destinada a equilibrar la energía del organismo mediante manipulaciones en los pies, que estimula el sistema nervioso, circulatorio y glandular.',
      icon: 'fa-solid fa-shoe-prints',
    },
    {
      name: 'Maderoterapia',
      description:
        'Serie de masajes para la tonificación del cuerpo con utensilios de madera para minimizar la retención, tratar la grasa localizada y estimular la producción de elastina.',
      icon: 'fa-solid fa-tree',
    },
    {
      name: 'Flores de Bach',
      description:
        'Medicina natural basada en 38 flores que actúan como una herramienta de sanación y evolución personal, actuando sobre el campo emocional, físico y espiritual.',
      icon: 'fa-solid fa-spa',
    },
    {
      name: 'Masaje deportivo',
      description:
        'Conjunto de masajes que preparan los tejidos para un futuro esfuerzo, prevenir lesiones futuras, recuperar lesiones y mejorar los tejidos musculares.',
      icon: 'fa-solid fa-person-swimming',
    },
    {
      name: 'Reiki',
      description:
        'Terapia energética en la que la “energía vital universal” se canaliza hacia la persona a través de la imposición de manos actuando en las alteraciones emocionales, físicas y mentales.',
      icon: 'fa-solid fa-hands-holding-circle',
    },
  ];
}
