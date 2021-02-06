import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component ({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{

    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla> = [];
    public marcas: String[]; //otra forma de declarar array
    public color: string;
    public mi_marca: string;

    constructor(private _zapatillaService: ZapatillaService){
        this.mi_marca = "mi_marca";
        this.color = 'yellow';
        this.marcas = new Array();
    }

    ngOnInit(){
        this.zapatillas = this._zapatillaService.getZapatillas();
        alert(this._zapatillaService.getTexto());
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