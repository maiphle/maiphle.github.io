export interface ProfileLink {
  label: string;
  url: string;
}

export interface ProjectLink {
  kind: 'github' | 'jupyter' | 'tableau' | 'pdf' | 'presentation' | 'external';
  label: string;
  url: string;
}

export interface PortfolioProject {
  title: string;
  tools?: string;
  objective: string;
  details?: string;
  imagePath?: string;
  imageAlt?: string;
  links: ProjectLink[];
}

export interface PortfolioSection {
  title: string;
  projects: PortfolioProject[];
}

export interface PortfolioContent {
  profile: {
    name: string;
    imagePath: string;
    imageAlt: string;
    intro: string;
    links: ProfileLink[];
  };
  sections: PortfolioSection[];
}

export const PORTFOLIO_CONTENT: PortfolioContent = {
  profile: {
    name: 'Mai Le',
    imagePath: 'docs/images/logo.jpg',
    imageAlt: 'Portrait of Mai Le',
    intro:
      'I’m a curious problem-solver who enjoys using data, technology, and a little creativity to figure out how things work—and how to make them work better. My background spans analytics, automation, data visualization, and statistical modeling, but I’m always looking for an excuse to learn something new. That curiosity follows me outside of work, too: I collect random facts, take on DIY and tinkering projects, grow an ever-expanding container garden, and travel whenever I get the chance. I’m also a proud cat mom, which means at least one of my projects usually has a very unhelpful supervisor nearby.',
    links: [
      {
        label: 'Resume',
        url: 'https://tuprd-my.sharepoint.com/:b:/r/personal/tuq42303_temple_edu/Documents/Resume_Mai_Jan_2023_1.pdf?csf=1&web=1&e=2jivpg',
      },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/maip-le/' },
      {
        label: 'Tableau',
        url: 'https://public.tableau.com/app/profile/mai.phuong.le',
      },
      { label: 'GitHub', url: 'https://github.com/maiphle' },
    ],
  },
  sections: [
    {
      title: 'Data Science',
      projects: [
        {
          title: 'New York State COVID-19 Prediction and Impact Analysis',
          tools: 'Python (Matplotlib, NumPy, Panda, Seaborn, sklearn, statsmodels)',
          objective:
            'Analyzed spatial and temporal COVID-19 trends across New York State to assess the relationship between vaccination rates, regional disparities, and case outcomes. Factor analysis identified meaningful county-level differences, while predictive modeling showed that ARIMAX captured changing trends and external influences more effectively than Linear Regression.',
          details:
            'The first factor analysis unveiled significant disparities among counties, pinpointing positive impacts in Richmond, Rockland, and Suffolk, and negative effects in Essex, Yates, and Tompkins. The second factor analysis revealed a noteworthy effect of initial vaccines but highlighted challenges like seasonal factors and emerging variants. In evaluating model performance, the Linear Regression model showcased strong explanatory power (R-squared = 0.85) in training but demonstrated lower predictive accuracy (RMSE = 193.55) in testing. The ARIMAX model, on the other hand, outperformed Linear Regression in predictive accuracy, demonstrating lower RMSE values for both training (45.86) and testing (350.87), and proving effective in capturing percentage differences (MAPE = 0.29 for training, 1.60 for testing) and maintaining high correlation with actual values (0.99 for training, 0.88 for testing).',
          links: [
            {
              kind: 'github',
              label: 'View on GitHub',
              url: 'https://github.com/maiphle/NYS-COVID-19-infection-prediction/',
            },
          ],
        },
        {
          title: 'Kidney Stone Prediction based on Urine Analysis Public',
          tools: 'Python (Matplotlib, NumPy, Panda, Seaborn, sklearn)',
          objective:
            'Determine the best model to predict the probability that a kidney stone is present in urinalysis data.',
          details:
            'Compared Random Forest Classifier, K Neighbors Classifier, and Logistic Regression. Random Forest performed best.',
          links: [
            {
              kind: 'github',
              label: 'View on GitHub',
              url: 'https://github.com/maiphle/Kidney-Stone-Prediction-based-on-Urine-Analysis',
            },
            {
              kind: 'jupyter',
              label: 'Open Notebook',
              url: 'https://github.com/maiphle/Kidney-Stone-Prediction-based-on-Urine-Analysis/blob/main/Final%20Project.ipynb',
            },
            {
              kind: 'presentation',
              label: 'Open Presentation',
              url: 'https://tuprd-my.sharepoint.com/:p:/r/personal/tuq42303_temple_edu/Documents/Classes/Backup/Temple%20Classes/Spring%202023/STAT%205603/Final%20Project/Kidney%20Stone%20Prediction%20based%20on%20Urine%20Analysis.pptx?d=w698145834ac3446d9d87a31d9b9e68f5&csf=1&web=1&e=zQtWrj',
            },
          ],
        },
        {
          title: 'City of SF Vehicle Collisions and Weather Conditions',
          tools:
            'Python (Matplotlib, NumPy, Panda, Seaborn, Geopandas, sklearn, XGBoost)',
          objective:
            'Analyze the relationship between transportation collisions in San Francisco and weather conditions.',
          details:
            'Evaluated collision patterns and applied Logistic Regression, XGBoost, and Random Forest for moderate-injury collision prediction.',
          imagePath: 'docs/images/Collision Locations in San Francisco.jpg',
          imageAlt: 'Map of collision locations in San Francisco',
          links: [
            {
              kind: 'github',
              label: 'View on GitHub',
              url: 'https://github.com/maiphle/City-of-SF-Vehicle-Collisions-and-Weather-Conditions',
            },
            {
              kind: 'jupyter',
              label: 'Open Notebook',
              url: 'https://github.com/maiphle/City-of-SF-Vehicle-Collisions-and-Weather-Conditions/blob/main/Final%20Project.ipynb',
            },
          ],
        },
        {
          title: 'Avocado Price Prediction',
          tools: 'SAS JMP, Excel',
          objective:
            'Assess avocado price and sales volume trends across US markets using regression analysis.',
          details:
            'Used data from the Hass Avocado Board (2015-2020) to model future pricing behavior based on demand indicators.',
          imagePath: 'docs/images/Avocado Price Prediction.svg',
          imageAlt: 'Avocado price prediction analysis visualization',
          links: [
            {
              kind: 'pdf',
              label: 'Open Presentation',
              url: 'https://tuprd-my.sharepoint.com/:b:/r/personal/tuq42303_temple_edu/Documents/Classes/In%20Progress%20Work/GitHub/Avocado%20Price%20Prediction.pdf?csf=1&web=1&e=Q0JjYA',
            },
          ],
        },
        {
          title: 'Credit Risk Prediction',
          tools: 'RapidMiner, Decision Tree Model',
          objective:
            'Predict customer credit rating (Bad or Good) using a decision tree model to support loan decisions.',
          imagePath: 'docs/images/rapidminer-credit-risk.png',
          imageAlt: 'RapidMiner credit risk process view',
          links: [
            {
              kind: 'github',
              label: 'View on GitHub',
              url: 'https://github.com/maiphle/Credit-Risk-Model',
            },
          ],
        },
      ],
    },
    {
      title: 'Data Visualization',
      projects: [
        {
          title: 'Call Center Dashboard',
          objective: 'Interactive Tableau dashboard for call center performance and SLA analysis.',
          imagePath: 'docs/images/Call Center Dashboard.png',
          imageAlt: 'Call center dashboard screenshot',
          links: [
            {
              kind: 'tableau',
              label: 'View on Tableau',
              url: 'https://public.tableau.com/views/CallCenterDashboard_16710827929470/Final?:language=en-US&:display_count=n&:origin=viz_share_link',
            },
          ],
        },
        {
          title: 'HR Dashboard',
          objective: 'Interactive Tableau dashboard for workforce and termination analysis.',
          imagePath: 'docs/images/HR Dashboard.png',
          imageAlt: 'HR dashboard screenshot',
          links: [
            {
              kind: 'tableau',
              label: 'View on Tableau',
              url: 'https://public.tableau.com/views/HRDashboard_16684642883090/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link',
            },
          ],
        },
        {
          title: "TED Talks: A Hero's Journey of Persuasion",
          objective:
            'Interactive Tableau dashboard exploring persuasive language patterns in TED talks.',
          imagePath: "docs/images/TED Talks A Heros Journey of Persuasion.png",
          imageAlt: 'TED talks persuasion dashboard screenshot',
          links: [
            {
              kind: 'tableau',
              label: 'View on Tableau',
              url: 'https://public.tableau.com/views/GroupTableauDashboard/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link',
            },
          ],
        },
      ],
    },
    {
      title: 'Database Design',
      projects: [
        {
          title: 'Elite Model Management',
          tools: 'SQLServer',
          objective: 'Database design for a fictional modeling agency.',
          details: 'Created schema to store records for customers, projects, employees, and related entities.',
          imagePath: "docs/images/Database ER diagram (crow's foot).png",
          imageAlt: 'Entity relationship diagram for Elite Model Management database',
          links: [
            {
              kind: 'github',
              label: 'View on GitHub',
              url: 'https://github.com/maiphle/Elite-Model-Mgmt-Database',
            },
          ],
        },
      ],
    },
  ],
};
