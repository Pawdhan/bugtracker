import { Component } from '@angular/core';
import { BugService } from './BugService';
import Bug from './entity/Bug';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
 constructor(private bugService: BugService) {}
  bug: Bug = new Bug();
  bugs: Bug[] = [];
  filter: string = "";
  ngOnInit() {
    this.bugService.getBugs().subscribe(response => {
      this.bugs = response as Bug[];
    });
  }

  create() {
    const promise = this.bugService.save(this.bug);
    promise.subscribe(
      function (response) {//success handler, 100-399
        console.log(response);
        alert('added successfully.')
      },
      function (error) {//error handler, 400-599
        alert(error.message);
      },
      function () { //complete handler
        console.log('audit ..always called..');
      });
  }

  sort() {
    this.bugs.sort((bug1, bug2) => bug1.severity.localeCompare(bug2.severity));
  }

  filterByStatus() {
    const promise = this.bugService.getByStatus(this.filter);
    promise.subscribe((response) => {
      console.log(response);
      this.bugs = response as Bug[];
    });    
  }
}
