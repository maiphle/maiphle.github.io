import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-page',
  imports: [RouterLink],
  templateUrl: './portfolio.page.html',
  styleUrl: './portfolio.page.css',
})
export class PortfolioPageComponent {
  protected readonly topics = [
    { label: 'Data Science', path: '/portfolio/data-science' },
    { label: 'Data Visualization', path: '/portfolio/data-visualization' },
    { label: 'Database Design', path: '/portfolio/database-design' },
    { label: 'Miscellaneous', path: '/portfolio/miscellaneous' },
  ];
}
