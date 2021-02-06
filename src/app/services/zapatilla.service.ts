import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
    
    public zapatillas: Array<Zapatilla>;

    constructor( ){
        this.zapatillas = [
            new Zapatilla('Reebok Classic', 'Reebok', 'Blanco', true, 80),
            new Zapatilla('Nike Runner', 'Nike', 'Rojo', true, 70),
            new Zapatilla('Adidas yezzy', 'Adidas', 'Negro', true, 85),  
            new Zapatilla('Nike otro', 'Nike', 'Amarillo', true, 60),
            new Zapatilla('All Star Converse', 'Converse', 'Verde', false, 180)       
        ];
    }

    getTexto(){
        return "hola desde servicio";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}