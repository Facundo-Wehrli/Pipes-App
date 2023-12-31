import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {
  public nameLower: string = 'facundo';
  public nameUpper: string = 'FACUNDO';
  public fullName: string = 'FaCuNdO weHrLi';

  public customDate: Date = new Date();
}
