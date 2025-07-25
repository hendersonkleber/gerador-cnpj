import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  host: {
    class: 'block h-screen min-h-screen bg-gray-100 flex flex-col',
    role: 'application',
  },
  template: `
    <app-header />

    <main class="flex-grow">
      <router-outlet />
    </main>

    <app-footer />
  `,
})
export class App {}
