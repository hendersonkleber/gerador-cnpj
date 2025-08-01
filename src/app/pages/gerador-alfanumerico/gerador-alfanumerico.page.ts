import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CnpjPipe } from '../../pipes/cnpj.pipe';
import { CNPJ } from '../../utils/cnpj.util';

@Component({
  selector: 'app-gerador-alfanumerico',
  imports: [CnpjPipe],
  host: {
    class: 'flex-1 place-content-center',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gerador-alfanumerico.page.html',
})
export class GeradorAlfanumericoPage {
  public readonly copiado = signal<boolean>(false);
  public readonly cnpj = signal<string>(CNPJ.aleatorioAlfanumerico());

  public gerar() {
    this.cnpj.set(CNPJ.aleatorioAlfanumerico());
    this.copiado.set(false);
  }

  public copiar() {
    const formatado = CNPJ.formatar(this.cnpj());
    navigator.clipboard.writeText(formatado).then(() => this.copiado.set(true));
  }
}
