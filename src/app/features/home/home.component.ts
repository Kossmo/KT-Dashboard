import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITES } from '../../core/data/sites.data';
import { SiteCardComponent } from '../../shared/components/site-card/site-card.component';

@Component({
  selector: 'app-home',
  imports: [SiteCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly sites = SITES;
}
