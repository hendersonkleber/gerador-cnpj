import { Component, computed, signal } from '@angular/core';
import { CNPJ } from '../../utils/cnpj.util';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validador',
  imports: [FormsModule],
  templateUrl: './validador.page.html',
})
export class ValidadorPage {
  public readonly cnpj = signal<string>('');
  public readonly valido = computed(() => CNPJ.validar(this.cnpj()));
}
