import { Component } from '@angular/core';




@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  labels1: string[] = ['Harina', 'Agua', 'Sal'];
  public data1 = [
    [10, 25, 40],

  ];

  labels2: string[] = ['Coca-Cola', 'Zumo', 'Vino'];
  public data2 = [
    [50, 10, 20],

  ];

  labels3: string[] = ['Naranjas', 'Limones', 'Piñas'];
  public data3 = [
    [15, 10, 35],

  ];
  labels4: string[] = ['Coches', 'Motos', 'Bicicletas'];
  public data4 = [
    [15, 10, 35],

  ];




}
