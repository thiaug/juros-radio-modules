import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { JurosCompostoComponent } from './juros-composto/juros-composto.component';
import { JurosSimplesComponent } from './juros-simples/juros-simples.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations: [RootComponent, JurosCompostoComponent, JurosSimplesComponent],
  bootstrap: [RootComponent],
})
export class AppModule {}
