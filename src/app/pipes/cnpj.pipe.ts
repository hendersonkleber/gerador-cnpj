import { Pipe, PipeTransform } from '@angular/core';
import { CNPJ } from '../utils/cnpj.util';

@Pipe({
  name: 'cnpj',
  standalone: true,
  pure: true,
})
export class CnpjPipe implements PipeTransform {
  transform(cnpj: string | number | null | undefined): string {
    if (!cnpj) return '';

    return CNPJ.formatar(cnpj.toString());
  }
}
