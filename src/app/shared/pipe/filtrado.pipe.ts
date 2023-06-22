import { Pipe, PipeTransform } from '@angular/core';
import { ModelFilter } from 'src/app/core';

@Pipe({
  name: 'filtradoID'
})

export class FiltradoPipe implements PipeTransform {
  
  transform(value: any[], ambienteID: string): any[] {
    if (!ambienteID) {
      return value;
    }

    return value.filter(item => item.ambienteID === ambienteID);
  }
}
