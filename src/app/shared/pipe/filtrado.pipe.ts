import { Pipe, PipeTransform } from '@angular/core';
import { ModelsFilter } from 'src/app/core';

@Pipe({
  name: 'filtrado'
})
export class FiltradoPipe implements PipeTransform {

  transform(selectAmbiente: ModelsFilter, ...args: unknown[]): unknown {
    return null;
  }

}
