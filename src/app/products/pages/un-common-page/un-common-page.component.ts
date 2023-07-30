import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-un-common-page',
  templateUrl: './un-common-page.component.html',
  styleUrls: ['./un-common-page.component.css'],
})
export class UnCommonPageComponent {
  public name: string = 'Facundo';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Facundo',
    'Natalia',
  ];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=3': 'tenemos 2 clientes esperando.',
    other: ' tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // keyvaluepipe
  public person={
    name: 'Facundo',
    age: 21,
    address: 'Argentina'
  }

  // Async pipe
  public myObservableTimer: Observable<number> = interval(2000); 

  public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(() =>{
      resolve('Tenemos data en la promesa')
    },3500)
  })
}
