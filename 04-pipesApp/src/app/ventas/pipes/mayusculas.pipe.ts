import { ElementAst } from "@angular/compiler";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
 name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    
    transform(texto: string, enMayusculas: boolean): string {
        if (!enMayusculas) {
            return texto;
        }
        else {
            return texto.toUpperCase();
        }
    }

}