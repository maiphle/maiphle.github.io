# Portfolio Website — Project Documentation

## 1. Project Objective

Build a modern personal portfolio website using **Angular** to showcase my professional, technical, and academic projects for job applications.

The primary purpose of the website is to allow recruiters, hiring managers, and other professional contacts to quickly understand:

* Who I am
* My professional background
* My technical skills
* My portfolio projects
* The technologies and tools I have used
* The business problems or objectives addressed by my projects
* Links to relevant project resources, dashboards, repositories, and professional profiles

The **initial objective is to rebuild the existing portfolio website in Angular**, maintaining a similar visual appearance, structure, and content organization.

The initial implementation should focus on establishing a clean and maintainable Angular foundation while leaving room for additional functionality in the future.

---

# 2. Existing Portfolio

The existing portfolio website is currently hosted at:

`https://maiphle.github.io/`

The existing GitHub repository is:

`https://github.com/maiphle/maiphle.github.io`

The existing website was built using a **Jekyll theme for GitHub Pages**.

The existing website should be treated as the primary reference for the initial Angular implementation.

## Existing Reference Files

Reference materials from the existing website will be provided in the `docs/` directory.

The `docs/` directory may contain:

* HTML examples from the existing website
* Images
* Other website assets
* `project-documentation.md`

These files are **reference materials for the Angular rebuild**.

They are not necessarily intended to become part of the Angular application's production source code.

### Important

Before implementing the UI, inspect the relevant files in `docs/` to understand:

* Existing page structure
* Content
* HTML hierarchy
* CSS classes and styling conventions
* Images and other assets
* Project organization
* Links
* Existing visual patterns

Use these files as the source of truth for reproducing the existing site's appearance and content where appropriate.

Do not unnecessarily recreate assets that already exist in the reference materials.

---

# 3. Hosting and Repository Strategy

## Public URL

The preferred public website URL is:

`https://maiphle.github.io/`

The existing URL should be preserved.

## GitHub Repository

The existing repository should become the primary repository for the Angular portfolio:

`maiphle/maiphle.github.io`

The Angular project is currently not synced to this repository.

The intended end state is for the Angular application source code to live in this repository and replace the existing Jekyll implementation.

## Preferred Deployment Architecture

The intended architecture is:

```text
Angular source code
        ↓
GitHub repository
        ↓
GitHub Actions
        ↓
Angular production build
        ↓
GitHub Pages
        ↓
https://maiphle.github.io/
```

The Angular project should eventually be configured for GitHub Pages deployment.

A separate GitHub Pages project URL such as:

`https://maiphle.github.io/portfolio/`

is not preferred unless a technical limitation requires it.

The preferred public URL remains:

`https://maiphle.github.io/`

---

# 4. Migration Strategy

The existing Jekyll website is currently live.

Do not immediately destroy or overwrite the existing production implementation.

The preferred migration process is:

1. Develop the Angular application locally.
2. Use the existing website and files in `docs/` as the visual/content reference.
3. Rebuild the site in Angular.
4. Verify the Angular application locally.
5. Commit the Angular implementation to Git.
6. Configure GitHub Pages deployment.
7. Verify the production Angular site.
8. Replace the old Jekyll implementation only after the Angular version is working.

Use Git branches and commits to preserve a rollback path during the migration.

---

# 5. Current Development Scope

The immediate goal is intentionally limited.

## Initial Goal

> Rebuild the existing portfolio website in Angular so that it looks and behaves similarly to the existing website.

The initial implementation should focus on:

* Layout
* Navigation
* Typography
* Sections
* Project entries
* Images
* Links
* Responsive behavior
* Basic accessibility
* Maintainable Angular architecture

Do **not** significantly redesign the website during the initial migration.

Do **not** implement every potential future feature during the initial build.

The priority is to achieve functional and visual parity with the existing website first.

---

# 6. Visual Reference Requirements

The existing website and the files in `docs/` should be used as the primary visual reference.

When implementing a component, first determine whether an equivalent element already exists in the reference HTML.

Pay attention to:

* Overall page width
* Content alignment
* Spacing
* Margins and padding
* Typography
* Font sizes
* Heading hierarchy
* Colors
* Borders
* Shadows
* Image sizing
* Project layout
* Navigation
* Responsive behavior
* Links
* Section ordering

Avoid making arbitrary design decisions when the existing implementation provides a clear reference.

If the existing site uses a particular visual pattern, reproduce that pattern unless there is a clear technical reason not to.

---

# 7. Future-Proof Architecture

The initial application should remain simple, but the architecture should not unnecessarily prevent future expansion.

Potential future features include:

* Contact forms
* Project filtering
* Project search
* Image carousels
* Image galleries
* Embedded dashboards
* Embedded Tableau visualizations
* Embedded Power BI reports
* Embedded videos
* Interactive project demonstrations
* Project detail pages
* Downloadable resumes
* Blog/articles
* Certifications
* Skills visualization
* Dark/light theme
* Analytics
* Animations
* External API integrations

These features are **not part of the initial implementation** unless explicitly requested later.

The application should simply be structured so these features can be added without requiring a complete rewrite.

Avoid speculative architecture intended only to support hypothetical features.

---

# 8. Angular Architecture

Use current Angular conventions and follow the existing guidance in:

`.github/copilot-instructions.md`

The project already contains Angular development instructions in that file.

Do not unnecessarily duplicate or contradict those instructions in this document.

This document primarily defines the **product requirements and project objectives**.

The Copilot instructions define **development behavior and coding guidance**.

Use a component-based architecture appropriate for a relatively small personal portfolio application.

Potential components may include:

* `Header`
* `Navigation`
* `Hero`
* `About`
* `Skills`
* `Portfolio`
* `ProjectCard`
* `ProjectSection`
* `Footer`

The exact component structure may be adjusted based on the actual requirements and Angular conventions.

Do not create excessive components for trivial elements.

Prefer components that represent meaningful reusable UI sections.

---

# 9. Portfolio Data

Where practical, portfolio project information should be separated from presentation logic.

A structured project model may eventually look similar to:

```typescript
interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  projectUrl?: string;
  githubUrl?: string;
  dashboardUrl?: string;
}
```

The exact model should be determined based on the actual content requirements.

A data-driven approach should make it easier to:

* Add projects
* Remove projects
* Reorder projects
* Filter projects
* Add project categories
* Create project detail pages
* Add additional metadata later

Avoid hard-coding large amounts of repeated project information directly into templates when structured data would be simpler.

However, do not over-engineer the data layer for the relatively small amount of content expected in a personal portfolio.

---

# 10. Initial Website Structure

The initial website should support the major sections represented in the existing portfolio.

## Header / Introduction

Include appropriate elements from the existing site, such as:

* Name
* Professional introduction
* Resume link
* LinkedIn link
* GitHub link
* Tableau link where applicable

Use the existing website as the reference for the exact presentation.

## Portfolio

Projects should be organized into logical categories.

Existing categories may include:

* Data Science
* Data Visualization
* Database Design

The category structure should remain easy to modify as my professional focus evolves.

Potential future categories may include:

* Business Intelligence
* Data Analytics
* Data Engineering
* Data Visualization
* Software Development
* AI / Automation
* Database Development

Do not add new categories simply because they are possible.

Use the categories represented by the existing website during the initial rebuild.

---

# 11. Project Entries

Each project should be capable of displaying relevant information such as:

* Project title
* Short description
* Project objective
* Technologies/tools
* Image or thumbnail
* External project link
* GitHub link where applicable
* Dashboard/demo link where applicable

Not every project needs to use every field.

The implementation should accommodate projects with different combinations of information.

For example:

```text
Project A
- Description
- Technologies
- Image
- GitHub link

Project B
- Description
- Technologies
- Image
- Tableau link

Project C
- Description
- Technologies
- Image
- External demo
```

Avoid displaying empty labels or placeholder content when a project does not contain a particular field.

---

# 12. Visual Design

The initial Angular website should closely resemble the existing portfolio.

Prioritize:

* Clean layout
* Professional appearance
* Good whitespace
* Easy navigation
* Readable typography
* Clear project organization
* Responsive design
* Minimal visual clutter

The first version is a **technology migration and rebuild**, not a major redesign.

Visual redesigns can be considered after the Angular version is stable.

---

# 13. Responsive Design

The website must work well on:

* Desktop
* Laptop
* Tablet
* Mobile

The portfolio should remain readable and usable at smaller screen sizes.

Requirements include:

* Responsive layout
* Responsive images
* Appropriate text sizing
* Usable navigation
* Project layouts that adapt to screen width
* No unnecessary horizontal scrolling

Use the existing website's responsive behavior as a reference where possible.

---

# 14. Accessibility

Follow reasonable web accessibility practices from the beginning.

At minimum:

* Use semantic HTML
* Maintain an appropriate heading hierarchy
* Provide meaningful `alt` text for images
* Maintain readable text contrast
* Ensure interactive elements are keyboard accessible
* Use descriptive link text
* Do not rely solely on color to communicate information

Accessibility does not need to be exhaustive during the first implementation, but the implementation should not introduce avoidable accessibility problems.

---

# 15. Performance

This is primarily a static portfolio website.

Prioritize:

* Fast initial load
* Optimized images
* Reasonable bundle size
* Lazy loading where appropriate
* Minimal unnecessary dependencies
* Efficient rendering

Do not introduce large libraries when standard Angular functionality or browser APIs are sufficient.

Do not optimize prematurely when there is no measurable or obvious performance concern.

---

# 16. External Content and Embedding

The architecture should allow external content to be incorporated later.

Potential examples include:

* Tableau dashboards
* Power BI reports
* GitHub repositories
* YouTube videos
* PDF documents
* Images
* External project demonstrations

These features are not required for the initial implementation.

For the initial version:

* Use normal links where appropriate.
* Use existing project assets.
* Do not build complex embedding infrastructure unless specifically requested.

Future embedded content should be implemented with appropriate security, responsiveness, and usability considerations.

---

# 17. Asset Management

Existing website assets will be provided in the `docs/` directory.

Before creating replacement assets:

1. Inspect the existing assets.
2. Determine whether they can be reused.
3. Prefer reuse when appropriate.
4. Avoid unnecessary duplication.

Assets that are required by the Angular application should eventually be placed in the appropriate Angular static asset location.

Do not automatically move or duplicate every file in `docs/`.

The `docs/` directory is primarily a **reference/documentation area**.

Only assets actually required by the Angular application should become application assets.

---

# 18. Development Workflow

The project should be developed incrementally.

Recommended workflow:

```text
Inspect reference files
        ↓
Understand existing structure
        ↓
Implement one logical section
        ↓
Run/build/test
        ↓
Review result
        ↓
Make targeted corrections
        ↓
Move to next section
```

Avoid attempting to implement the entire application in one large change.

Changes should be small enough that problems can be easily identified and reverted.

---

# 19. AI / Copilot Token Efficiency

AI usage is limited for this project.

**Use AI credits efficiently.**

This is an explicit project requirement.

## General Principles

Before making changes:

* Inspect the relevant existing files.
* Determine what already exists.
* Reuse existing code and assets when appropriate.
* Avoid generating code that is not needed.
* Avoid speculative features.
* Avoid unnecessary refactoring.

## Minimize Repeated Context

Do not repeatedly reread or reproduce files that have not changed.

When a specific file or section is relevant, inspect only what is necessary.

Avoid asking the AI to repeatedly summarize the entire project.

Use the existing documentation and source files as persistent context.

## Prefer Targeted Changes

Prefer:

```text
Modify the ProjectCard component to support an optional GitHub link.
```

over:

```text
Rewrite the entire portfolio application.
```

When possible, make a focused change to the smallest relevant set of files.

## Avoid Unnecessary Generation

Do not generate:

* Features that were not requested
* Large amounts of boilerplate
* Duplicate interfaces
* Duplicate CSS
* Unused services
* Unused dependencies
* Extensive comments explaining obvious code
* Speculative abstractions
* Placeholder functionality for future features

## Reuse Existing Work

If functionality or styling already exists in the reference implementation, use it as a reference instead of inventing an unrelated replacement.

If an asset already exists, reuse it rather than generating a new equivalent asset.

## Keep Responses Concise

When using Copilot as an agent:

* Prefer concise explanations.
* Focus on actions and results.
* Avoid long descriptions of obvious changes.
* Report only relevant validation results and issues.
* Do not spend tokens explaining every line of straightforward code.

## Validate Incrementally

After meaningful changes:

* Run the appropriate build or test.
* Fix errors before moving to unrelated work.
* Avoid making many unrelated changes before validation.

The goal is to reduce wasted AI iterations caused by large batches of changes.

---

# 20. Avoid Over-Engineering

This is a personal portfolio website, not a large enterprise application.

Prefer:

* Simple
* Maintainable
* Readable
* Understandable
* Easy to modify

Avoid introducing unnecessary:

* State management libraries
* Backend services
* APIs
* Database infrastructure
* Complex dependency injection patterns
* Excessive abstractions
* Complex routing
* Third-party UI frameworks

unless there is a clear requirement for them.

Future complexity should be introduced only when the corresponding feature is actually needed.

---

# 21. Git and Collaboration

The Angular project should eventually be stored in:

`maiphle/maiphle.github.io`

Git should be used to track the migration and ongoing development.

During migration:

* Preserve the existing working implementation until the Angular version is ready.
* Use meaningful commits.
* Keep changes focused.
* Avoid mixing unrelated refactoring with feature changes.
* Use branches when appropriate.
* Maintain a straightforward rollback path.

The immediate purpose of Git integration is collaboration, version history, and documentation.

Advanced CI/CD automation can be implemented separately after the application is stable.

---

# 22. Deployment

The final application should be deployable through GitHub Pages.

The desired deployment flow is:

```text
Local development
       ↓
Git commit
       ↓
GitHub repository
       ↓
GitHub Actions
       ↓
Angular production build
       ↓
GitHub Pages
       ↓
https://maiphle.github.io/
```

GitHub Actions deployment does not need to be implemented during the initial UI rebuild if it would distract from the primary objective.

However, the Angular project should be structured so GitHub Pages deployment can be added without significant architectural changes.

---

# 23. Initial Milestone

The initial milestone is complete when:

* [ ] Angular application runs successfully locally.
* [ ] Existing portfolio content has been migrated.
* [ ] Existing HTML reference files have been inspected.
* [ ] Existing website assets have been inspected.
* [ ] Appropriate existing assets have been reused.
* [ ] Website visually resembles the previous portfolio.
* [ ] Header/introduction is implemented.
* [ ] Professional links are implemented.
* [ ] Portfolio sections are implemented.
* [ ] Project entries are implemented.
* [ ] Project images are supported.
* [ ] External project links are supported.
* [ ] Website is responsive.
* [ ] Basic accessibility practices are implemented.
* [ ] Code is organized into maintainable Angular components.
* [ ] Portfolio content can be updated without excessive template changes.
* [ ] Application produces a successful production build.
* [ ] Application is ready for GitHub Pages deployment.

Deployment can be treated as a subsequent milestone if necessary.

---

# 24. Future Milestones

Potential future milestones include:

## Milestone 2 — GitHub Pages

* Configure GitHub Actions.
* Build Angular application for production.
* Deploy to GitHub Pages.
* Preserve `https://maiphle.github.io/`.

## Milestone 3 — Portfolio Enhancements

Potential features:

* Project filtering
* Project detail pages
* Image carousels
* Embedded dashboards
* Improved project metadata
* Additional portfolio categories

## Milestone 4 — Interactive Features

Potential features:

* Contact form
* Search
* Interactive demonstrations
* Analytics
* Additional animations

These milestones should only be implemented when explicitly requested.

---

# 25. Coding Agent Instructions

When working on this project:

1. Read and follow `.github/copilot-instructions.md`.
2. Treat this document as the primary source for product requirements.
3. Inspect relevant files in `docs/` before implementing or modifying corresponding UI.
4. Treat the existing website as the visual and content reference.
5. Do not treat files in `docs/` as production Angular source unless explicitly instructed.
6. Prioritize visual and functional similarity to the existing website during the initial rebuild.
7. Make small, focused changes.
8. Validate changes incrementally.
9. Reuse existing assets whenever practical.
10. Avoid unnecessary dependencies.
11. Avoid speculative features.
12. Avoid unnecessary refactoring.
13. Keep portfolio content easy to update.
14. Preserve the ability to deploy to `https://maiphle.github.io/`.
15. Optimize AI/token usage by avoiding repeated inspection, unnecessary code generation, and verbose explanations.
16. If a requirement is ambiguous, prefer the simplest implementation consistent with the existing website and current project scope.
17. Do not implement future features merely because the architecture could support them.
18. Do not make major visual changes without an explicit requirement.

---

# 26. Definition of Success

The project should ultimately provide a professional, maintainable Angular portfolio website that:

* Preserves the existing `maiphle.github.io` URL.
* Maintains the recognizable appearance and content structure of the existing portfolio.
* Clearly showcases my projects and technical experience.
* Works well across desktop and mobile devices.
* Is easy for me to update as my portfolio evolves.
* Can support additional interactive features in the future.
* Can be deployed through GitHub Pages.
* Uses a clean and maintainable Angular architecture.
* Avoids unnecessary technical complexity.
* Uses limited AI/Copilot credits efficiently.

The first priority is **rebuilding the existing portfolio successfully in Angular**.

Additional functionality and redesign should come only after the initial implementation is stable.
