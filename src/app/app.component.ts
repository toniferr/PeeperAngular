import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PeeperAngular';
  public mostrar_videojuegos: boolean = true;

  ocultarVideojuegos(value: boolean){
    this.mostrar_videojuegos = value;
  }
}
