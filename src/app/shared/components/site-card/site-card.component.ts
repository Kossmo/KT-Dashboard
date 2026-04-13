import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

import { Site } from '../../../core/models/site.model';
import { LazyIframeDirective } from '../../directives/lazy-iframe.directive';

@Component({
  selector: 'app-site-card',
  imports: [LazyIframeDirective],
  templateUrl: './site-card.component.html',
  styleUrl: './site-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteCardComponent {
  site = input.required<Site>();
  screenshotFailed = signal(false);

  onScreenshotError(): void {
    this.screenshotFailed.set(true);
  }
}
