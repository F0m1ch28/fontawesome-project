import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faAd, faAnchor, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-fontawesome-project';
  currentIcon: IconDefinition = faCoffee;
  icons = [faCoffee, faAd, faAnchor];
  iconEnterState = '';

  showRandomIcon(): void {
    this.iconEnterState = 'icon-enter';
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * this.icons.length);
      this.currentIcon = this.icons[randomIndex];
      this.iconEnterState = 'icon-enter-active';
    }, 3000);
  }
}