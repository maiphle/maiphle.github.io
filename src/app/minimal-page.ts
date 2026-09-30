import { Component, DestroyRef, inject, signal } from '@angular/core';
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

/**
 * Renders `docs/github-live-content.md` (served at `/docs/github-live-content.md`)
 * as a plain, unstyled markdown page. The `## Navigation` section is stripped
 * before rendering since it links to routes that no longer exist in this
 * single-page app.
 */
@Component({
  selector: 'app-minimal-page',
  templateUrl: './minimal-page.html',
})
export class MinimalPage {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly loading = signal(true);
  protected readonly error = signal(false);
  protected readonly content = signal<SafeHtml | null>(null);

  constructor() {
    const controller = new AbortController();
    this.destroyRef.onDestroy(() => controller.abort());

    fetch('docs/github-live-content.md', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.status}`);
        }
        return response.text();
      })
      .then((markdown) => {
        const html = marked.parse(this.stripNavigationSection(markdown), { async: false }) as string;
        this.content.set(this.sanitizer.bypassSecurityTrustHtml(html));
        this.loading.set(false);
      })
      .catch((err) => {
        if (err?.name === 'AbortError') {
          return;
        }
        this.error.set(true);
        this.loading.set(false);
      });
  }

  private stripNavigationSection(markdown: string): string {
    const lines = markdown.split('\n');
    const start = lines.findIndex((line) => line.trim() === '## Navigation');
    if (start === -1) {
      return markdown;
    }

    let end = lines.length;
    for (let i = start + 1; i < lines.length; i++) {
      if (lines[i].startsWith('## ')) {
        end = i;
        break;
      }
    }

    lines.splice(start, end - start);
    return lines.join('\n');
  }
}
