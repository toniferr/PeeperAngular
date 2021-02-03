import { Component } from '@angular/core';

@Component ({
    selector: 'videojuego',
    template: `
        <h2>Componente de videojuego</h2>
        <ul>
            <li>GTA</li>
            <li>FIFA</li>
            <li>Hitman</li>
            <li>DBD</li>
        </ul>
    `
})
export class VideojuegoComponent {

    constructor(){
        console.log("Se ha cargado el componente: videojuegocomponent");
    }
}