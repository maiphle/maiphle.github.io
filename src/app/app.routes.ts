import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home.page';
import { WorkExperiencePageComponent } from './pages/work-experience.page';
import { EducationPageComponent } from './pages/education.page';
import { PortfolioPageComponent } from './pages/portfolio.page';
import { PortfolioTopicPageComponent } from './pages/portfolio-topic.page';

export const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'work-experience', component: WorkExperiencePageComponent },
	{ path: 'education', component: EducationPageComponent },
	{ path: 'portfolio', component: PortfolioPageComponent },
	{
		path: 'portfolio/data-science',
		component: PortfolioTopicPageComponent,
		data: { title: 'Data Science' },
	},
	{
		path: 'portfolio/data-visualization',
		component: PortfolioTopicPageComponent,
		data: { title: 'Data Visualization' },
	},
	{
		path: 'portfolio/database-design',
		component: PortfolioTopicPageComponent,
		data: { title: 'Database Design' },
	},
	{
		path: 'portfolio/miscellaneous',
		component: PortfolioTopicPageComponent,
		data: { title: 'Miscellaneous' },
	},
	{ path: '**', redirectTo: '' },
];
