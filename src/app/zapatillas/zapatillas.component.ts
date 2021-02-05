import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component ({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{

    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[]; //otra forma de declarar array
    public color: string;
    public mi_marca: string;

    constructor(){
        this.mi_marca = "mi_marca";
        this.color = 'yellow';
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Reebok Classic', 'Reebok', 'Blanco', true, 80),
            new Zapatilla('Nike Runner', 'Nike', 'Rojo', true, 70),
            new Zapatilla('Adidas yezzy', 'Adidas', 'Negro', true, 85),  
            new Zapatilla('Nike otro', 'Nike', 'Amarillo', true, 60),
            new Zapatilla('All Star Converse', 'Converse', 'Verde', false, 180)       
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if (this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
        })
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(indice: number){
        //delete this.marcas[indice];
        this.marcas.splice(indice,1); //borrar cuantos elem. a eliminar
    }

    onBlur(){
        console.log("ha salido del blur()");
    }

    mostrarPalabra(){
        alert(this.mi_marca);
    }

}