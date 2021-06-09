import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-course-project';
  loadedFeature = 'recipe';

  element: any;

  @HostListener('window:click', ['$event.target'])
  onClick(targetElement: any) {
    this.element = targetElement;
  }

  @HostListener('window:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if (event.ctrlKey && event.shiftKey && event.altKey) {
      console.log(this.element);
      console.log(this.element.text);
    }
  }
  onNavigated(feature: string) {
    this.loadedFeature = feature;
  }
}
