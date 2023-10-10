import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rdesign';

  onClickScrollToHome() {
    let x = document.getElementById('home');
    if (x) {
      x.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onClickScrollToServices() {
    let x = document.querySelector('#services');
    if (x) {
      x.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onClickScrollToPortofolio() {
    let x = document.querySelector('#portofolio');
    if (x) {
      x.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onClickScrollToContactUs() {
    let x = document.getElementById('contact-us');
    if (x) {
      x.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
