import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yavirac';
  ciudad = 'Manta';
  n1=5;
  n2=9;
  r=this.n1+this.n2;
  msg=`mi nombre es ${this.title} y vivo en ${this.ciudad}`;
  msg2='mi nombre es '+this.title+' y vivo en '+this.ciudad;
}
