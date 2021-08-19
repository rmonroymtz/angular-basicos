import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
<h3>{{contador}}</h3>
<p>La base es: <strong>{{base}}</strong></p>
<button (click)="acumular(base)">+ {{base}}</button>
<button (click)="acumular(-base)">- {{base}}</button>
    ` 
})
export class ContadorComponent {
    public title: string = 'Contador App';
    public contador: number = 0;
  
    public base: number = 5;
  
    acumular(valor: number){
      this.contador += valor;
    }
  }