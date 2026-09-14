import { DOCUMENT } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

type ScreenSizeCategory = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly destroyRef = inject(DestroyRef);
  protected readonly theme = signal<'light' | 'dark'>('light');
  protected readonly screenSize = signal<ScreenSizeCategory>('medium');
  protected readonly isSmallScreen = signal(false);
  protected readonly isMenuOpen = signal(false);
  protected readonly isMobilePortfolioExpanded = signal(false);

  protected readonly portfolioTopics = [
    { label: 'Data Science', path: '/portfolio/data-science' },
    { label: 'Data Visualization', path: '/portfolio/data-visualization' },
    { label: 'Database Design', path: '/portfolio/database-design' },
    { label: 'Miscellaneous', path: '/portfolio/miscellaneous' },
  ];

  protected readonly navItems = [
    { label: 'Home', path: '/' },
    { label: 'Work Experience', path: '/work-experience' },
    { label: 'Education', path: '/education' },
    { label: 'Portfolio', path: '/portfolio' },
  ];

  constructor() {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((state) => {
        const breakpoints = state.breakpoints;
        const currentSize: ScreenSizeCategory = breakpoints[Breakpoints.XSmall]
          ? 'xsmall'
          : breakpoints[Breakpoints.Small]
            ? 'small'
            : breakpoints[Breakpoints.Medium]
              ? 'medium'
              : breakpoints[Breakpoints.Large]
                ? 'large'
                : 'xlarge';

        this.screenSize.set(currentSize);

        const isSmall = currentSize === 'xsmall' || currentSize === 'small';
        this.isSmallScreen.set(isSmall);

        if (!isSmall) {
          this.isMenuOpen.set(false);
          this.isMobilePortfolioExpanded.set(false);
        }
      });

    const preferredDark =
      typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.theme.set(preferredDark ? 'dark' : 'light');
    this.applyTheme();
  }

  protected toggleTheme(): void {
    this.theme.update((value) => (value === 'light' ? 'dark' : 'light'));
    this.applyTheme();
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);

    if (this.isMenuOpen()) {
      this.isMobilePortfolioExpanded.set(false);
    }
  }

  protected closeMenu(): void {
    if (this.isSmallScreen()) {
      this.isMenuOpen.set(false);
      this.isMobilePortfolioExpanded.set(false);
    }
  }

  protected toggleMobilePortfolioMenu(): void {
    if (this.isSmallScreen()) {
      this.isMobilePortfolioExpanded.update((value) => !value);
    }
  }

  private applyTheme(): void {
    this.document.documentElement.setAttribute('data-theme', this.theme());
  }
}
