import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] | undefined = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-align-left',
            routerLink: ['/'],
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: ['numbers'],
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: ['uncommon'],
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        routerLink:['custom'],
        items: [{ label: 'otro elemento', icon: 'pi pi-cog' }],
      },
    ];
  }
}
