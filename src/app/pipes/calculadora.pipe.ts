import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {
    
    
    //dato | calculadora: otroDato (primer parametro dato y segundo parametro el otro dato)
    //param1               param2
    transform(value1: any, value2:any){
        let operaciones = `
            Suma: ${value1 + value2} 
            Resta: ${value1 - value2} 
            Multiplicación: ${value1 * value2} 
            División: ${value1 / value2} 
        `;
        return operaciones;
    }
}