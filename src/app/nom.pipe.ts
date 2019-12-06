import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nom'
})
export class NomPipe implements PipeTransform {

  transform(nom:string): string{
    return '***'+nom+'***';
  }

}
