import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CNPJ } from '../../utils/cnpj.util';

@Component({
  selector: 'app-validador',
  imports: [FormsModule],
  host: {
    class: 'flex-1 place-content-center',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './validador.page.html',
})
export class ValidadorPage {
  public readonly cnpj = signal<string>('');
  public readonly valido = computed(() => CNPJ.validar(this.cnpj()));
}
