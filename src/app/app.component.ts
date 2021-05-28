import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedRole: string = "";
  onSelect(value: string) {
    console.log('val: '+value);
    this.selectedRole = value;
  }
}
