import { Component, computed, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PORTFOLIO_CONTENT, ProjectLink } from '../portfolio-content';

@Component({
  selector: 'app-portfolio-topic-page',
  imports: [NgOptimizedImage],
  templateUrl: './portfolio-topic.page.html',
  styleUrl: './portfolio-topic.page.css',
})
export class PortfolioTopicPageComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly overlayImagePath = signal<string | null>(null);
  protected readonly overlayImageAlt = signal('');
  protected readonly overlayScale = signal(1);
  protected readonly overlayOffsetX = signal(0);
  protected readonly overlayOffsetY = signal(0);

  private dragStartX = 0;
  private dragStartY = 0;
  private startOffsetX = 0;
  private startOffsetY = 0;
  private isDragging = false;

  protected readonly topicTitle = computed(
    () => (this.route.snapshot.data['title'] as string | undefined) ?? 'Portfolio Topic'
  );

  protected readonly projects = computed(() => {
    const topic = this.topicTitle();
    const section = PORTFOLIO_CONTENT.sections.find((item) => item.title === topic);
    return section?.projects ?? [];
  });

  protected readonly isDataVisualizationTopic = computed(
    () => this.topicTitle() === 'Data Visualization'
  );

  protected openImageOverlay(imagePath: string, imageAlt: string): void {
    this.overlayImagePath.set(imagePath);
    this.overlayImageAlt.set(imageAlt);
    this.resetOverlayTransform();
  }

  protected closeImageOverlay(): void {
    this.overlayImagePath.set(null);
    this.resetOverlayTransform();
  }

  protected zoomInOverlay(): void {
    this.overlayScale.update((value) => Math.min(3, value + 0.25));
  }

  protected zoomOutOverlay(): void {
    this.overlayScale.update((value) => {
      const nextValue = Math.max(1, value - 0.25);
      if (nextValue === 1) {
        this.overlayOffsetX.set(0);
        this.overlayOffsetY.set(0);
      }
      return nextValue;
    });
  }

  protected startOverlayDrag(event: MouseEvent): void {
    if (this.overlayScale() <= 1) {
      return;
    }
    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.dragStartY = event.clientY;
    this.startOffsetX = this.overlayOffsetX();
    this.startOffsetY = this.overlayOffsetY();
    event.preventDefault();
  }

  protected dragOverlayImage(event: MouseEvent): void {
    if (!this.isDragging) {
      return;
    }
    this.overlayOffsetX.set(this.startOffsetX + (event.clientX - this.dragStartX));
    this.overlayOffsetY.set(this.startOffsetY + (event.clientY - this.dragStartY));
  }

  protected stopOverlayDrag(): void {
    this.isDragging = false;
  }

  protected getBadgeImageUrl(link: ProjectLink): string | null {
    if (link.kind === 'github') {
      return 'https://img.shields.io/badge/GitHub-repo-black?logo=GitHub';
    }

    if (link.kind === 'jupyter') {
      return 'https://img.shields.io/badge/Jupyter-Notebook-orange?logo=Jupyter';
    }

    if (link.kind === 'tableau') {
      return 'https://img.shields.io/badge/Tableau-Interact-orange?logo=Tableau';
    }

    if (link.kind === 'pdf') {
      return 'https://img.shields.io/badge/PDF-View-blue?logo=adobe-acrobat-reader';
    }

    if (link.kind === 'presentation') {
      return 'https://img.shields.io/badge/PowerPoint-View-orange?logo=Microsoft';
    }

    return null;
  }

  private resetOverlayTransform(): void {
    this.overlayScale.set(1);
    this.overlayOffsetX.set(0);
    this.overlayOffsetY.set(0);
    this.isDragging = false;
  }
}
