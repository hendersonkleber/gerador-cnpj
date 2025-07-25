import { Component, signal } from '@angular/core';
import { CnpjPipe } from '../../pipes/cnpj.pipe';
import { CNPJ } from '../../utils/cnpj.util';

@Component({
  selector: 'app-gerador',
  imports: [CnpjPipe],
  templateUrl: './gerador.page.html',
})
export class GeradorPage {
  public readonly copiado = signal<boolean>(false);
  public readonly cnpj = signal<string>(CNPJ.aleatorio());

  public gerar() {
    this.cnpj.set(CNPJ.aleatorio());
    this.copiado.set(false);
  }

  public copiar() {
    const formatado = CNPJ.formatar(this.cnpj());
    navigator.clipboard.writeText(formatado).then(() => this.copiado.set(true));
  }
}
