import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component ({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{

    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebok Classic', 'Reebok', 'blanco', true, 80),
            new Zapatilla('Nike Runner', 'Nike', 'rojo', true, 90),
            new Zapatilla('Adidas yezzy', 'Adidas', 'negro', true, 85)        
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
    }

}