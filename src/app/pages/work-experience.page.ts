import { Component } from '@angular/core';

interface WorkExperienceEntry {
  company: string;
  location: string;
  title: string;
  period: string;
  bullets: string[];
}

@Component({
  selector: 'app-work-experience-page',
  templateUrl: './work-experience.page.html',
  styleUrl: './work-experience.page.css',
})
export class WorkExperiencePageComponent {
  protected readonly experiences: WorkExperienceEntry[] = [
    {
      company: 'Dell Technologies',
      location: 'Round Rock, TX',
      title: 'Global Production Planning Business Intelligence Analyst',
      period: 'Jan 2024 - Present',
      bullets: [
        'Automated production-planning ETL workflows in Python and SQL that process over 1M rows daily, saving 10+ hours per week and delivering reliable operational data for planning decisions.',
        'Developed 15+ Power BI dashboards and analytical reports used by 100+ weekly users to monitor manufacturing backlog, shipments, order stages, and capacity-related performance.',
        'Translated ambiguous business questions into analytical requirements, KPIs, data models, and decision-support reporting; partnered with planners to interpret findings and resolve source-data issues.',
        'Managed 50+ workflows and supporting SQL Server systems, including process monitoring, failure troubleshooting, output validation, and technical documentation.',
        'Modernized 10+ legacy reports and migrated 20+ workflows and 15+ Power BI connections during a datamart retirement, testing dependencies to protect data integrity and continuity.',
      ],
    },
    {
      company: 'Dell Technologies',
      location: 'Round Rock, TX',
      title: 'ISG Market Intelligence Data Science Intern',
      period: 'Jun 2023 - Dec 2023',
      bullets: [
        'Used Python and SQL to transform and analyze competitor financial data and $18.5B+ in industry trends for product strategy and demand-planning stakeholders.',
        'Built an interactive Power BI solution for rapid ad hoc analysis; gathered business and technical requirements and presented methods, findings, and recommendations to senior leadership.',
      ],
    },
    {
      company: 'TD Bank',
      location: 'Mount Laurel, NJ',
      title: 'Consumer Deposit & Payment Products Product Specialist',
      period: 'Jul 2021 - Jul 2022',
      bullets: [
        'Automated recurring data collection with VBA and analyzed operational data supporting 10,000+ customers; resolved workflow challenges affecting 1,158 branches.',
      ],
    },
    {
      company: 'Amtrak',
      location: 'Philadelphia, PA',
      title: 'Procurement & Supply Chain Business Analyst Intern',
      period: 'Jan 2021 - May 2021',
      bullets: [
        'Analyzed procurement datasets for a $16.5M AWS initiative and developed decision-support reporting for costs and operational KPIs in a transportation and supply-chain environment.',
      ],
    },
  ];
}
