import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public linha_um: number[] = new Array(10).fill(0);
  public linha_dois: number[] = new Array(5).fill(0);
}
