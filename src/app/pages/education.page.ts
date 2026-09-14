import { Component } from '@angular/core';

interface EducationEntry {
  institution: string;
  degree: string;
  program?: string;
}

@Component({
  selector: 'app-education-page',
  templateUrl: './education.page.html',
  styleUrl: './education.page.css',
})
export class EducationPageComponent {
  protected readonly entries: EducationEntry[] = [
    {
      institution: 'Temple University',
      degree: 'Master of Science',
      program: 'Business Analytics',
    },
    {
      institution: 'Rider University',
      degree: 'Bachelor of Business Administration',
      program: 'Majors: Global Supply Chain Management and Investment Finance | Minor: Business Analytics',
    },
  ];
}
