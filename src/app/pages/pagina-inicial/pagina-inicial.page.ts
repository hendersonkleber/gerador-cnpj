import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  imports: [],
  host: {
    class: 'flex-1 place-content-center',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pagina-inicial.page.html',
})
export class PaginaInicialPage {}
