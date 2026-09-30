import { Component, signal } from '@angular/core';

interface Project {
  name: string;
  title: string;
  type: string;
  number: string;
  description: string;
  tags: string[];
  visual: string;
  rows: string[];
  bars: number[];
  url?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly dark = signal(this.readInitialTheme());

  protected readonly active = signal(0);
  protected readonly paused = signal(false);

  protected readonly skills = [
    'SQL',
    'Python',
    'Power BI',
    'Tableau',
    'R',
    'Git',
    'Angular',
    'JavaScript',
    'TypeScript',
  ];

  protected readonly projects: Project[] = [
    {
      name: 'Patterns behind public health.',
      title: 'COVID-19 vaccination analysis',
      type: 'DATA SCIENCE',
      number: '01',
      description:
        'Analyzed spatial and temporal COVID-19 trends across New York State, exploring vaccination rates, county-level differences, and case outcomes with factor analysis, linear regression, and ARIMAX.',
      tags: ['Regression', 'ARIMAX', 'Statistical analysis'],
      visual: 'Looking across time & place',
      rows: ['Spatial', 'Temporal', 'Regional', 'Sentiment'],
      bars: [76, 60, 91, 49],
      url: 'https://github.com/maiphle/NYS-COVID-19-infection-prediction/',
    },
    {
      name: 'A clearer view of service.',
      title: 'Call Center Dashboard',
      type: 'DATA VISUALIZATION',
      number: '02',
      description:
        'An interactive Tableau dashboard exploring call center performance and service-level agreement analysis.',
      tags: ['Tableau', 'Dashboard design'],
      visual: 'Service, in focus',
      rows: ['Performance', 'Service', 'Analysis', 'Reporting'],
      bars: [74, 62, 89, 56],
      url: 'https://public.tableau.com/views/CallCenterDashboard_16710827929470/Final',
    },
    {
      name: 'Weather meets the road.',
      title: 'San Francisco collisions & weather',
      type: 'DATA SCIENCE',
      number: '03',
      description:
        'Explored the relationship between San Francisco vehicle collisions and weather. Applied logistic regression, XGBoost, and random forest to predict moderate-injury collisions.',
      tags: ['Python', 'GeoPandas', 'XGBoost'],
      visual: 'Patterns across the city',
      rows: ['Weather', 'Location', 'Collisions', 'Models'],
      bars: [67, 84, 72, 51],
      url: 'https://github.com/maiphle/City-of-SF-Vehicle-Collisions-and-Weather-Conditions',
    },
    {
      name: 'Finding signals in the data.',
      title: 'Kidney Stone Prediction',
      type: 'DATA SCIENCE',
      number: '04',
      description:
        'Compared random forest, K-nearest neighbors, and logistic regression to predict kidney stone presence from urinalysis data. Random forest performed best in the project comparison.',
      tags: ['Python', 'scikit-learn', 'Classification'],
      visual: 'Comparing approaches',
      rows: ['Urinalysis', 'Features', 'Training', 'Evaluation'],
      bars: [81, 65, 73, 54],
      url: 'https://github.com/maiphle/Kidney-Stone-Prediction-based-on-Urine-Analysis',
    },
    {
      name: 'Structure behind the scenes.',
      title: 'Elite Model Management',
      type: 'DATABASE DESIGN',
      number: '05',
      description:
        'Designed a SQL Server database for a fictional modeling agency, with a schema connecting customers, projects, employees, and related records.',
      tags: ['SQL Server', 'Data modeling', 'Database design'],
      visual: 'Connecting the records',
      rows: ['Customers', 'Projects', 'Employees', 'Relations'],
      bars: [72, 86, 63, 79],
      url: 'https://github.com/maiphle/Elite-Model-Mgmt-Database',
    },
  ];

  private startX = 0;

  protected toggleTheme(): void {
    const dark = !this.dark();
    this.dark.set(dark);
    document.documentElement.dataset['theme'] = dark ? 'dark' : 'light';
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', dark ? '#202224' : '#eee9de');
    try {
      localStorage.setItem('mai-theme', dark ? 'dark' : 'light');
    } catch {
      /* localStorage may be unavailable (e.g. private browsing) */
    }
  }

  protected next(): void {
    this.active.update((value) => (value + 1) % this.projects.length);
  }

  protected previous(): void {
    this.active.update((value) => (value + this.projects.length - 1) % this.projects.length);
  }

  protected touchStart(event: TouchEvent): void {
    this.startX = event.changedTouches[0].clientX;
  }

  protected touchEnd(event: TouchEvent): void {
    const delta = this.startX - event.changedTouches[0].clientX;
    if (Math.abs(delta) > 45) {
      delta > 0 ? this.next() : this.previous();
    }
  }

  private readInitialTheme(): boolean {
    return document.documentElement.dataset['theme'] === 'dark';
  }
}
