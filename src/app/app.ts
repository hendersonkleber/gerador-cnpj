import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  host: {
    class: 'block h-screen min-h-screen bg-gray-100 flex flex-col',
    role: 'application',
  },
  template: `
    <app-header />

    <main class="flex-grow flex flex-col items-center justify-center">
      <router-outlet />
    </main>
  `,
})
export class App {}
