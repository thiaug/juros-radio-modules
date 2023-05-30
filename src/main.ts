import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  bootstrapApplication,
  platformBrowser,
} from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// @Component({
//   selector: 'my-app',
//   standalone: true,
//   imports: [CommonModule, RootComponent, JurosCompostoComponent,JurosSimplesComponent],
// })
// export class App {
//   name = 'Angular';
// }

// bootstrapApplication(App);
