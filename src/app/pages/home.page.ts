import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PORTFOLIO_CONTENT } from '../portfolio-content';

@Component({
  selector: 'app-home-page',
  imports: [NgOptimizedImage],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePageComponent {
  protected readonly profile = PORTFOLIO_CONTENT.profile;
  protected readonly heroHeadingLine1 = 'Hi, I am Mai,';
  protected readonly heroHeadingLine2 = 'Data Enthusiast';

  protected readonly resumeUrl =
    this.profile.links.find((link) => link.label === 'Resume')?.url ?? '#';

  protected readonly linkedInUrl =
    this.profile.links.find((link) => link.label === 'LinkedIn')?.url ?? '#';

  protected readonly githubUrl =
    this.profile.links.find((link) => link.label === 'GitHub')?.url ?? '#';
}
