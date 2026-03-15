import { Site } from '../models/site.model';

export const SITES: Site[] = [
  {
    name: 'Dissect',
    slug: 'dissect',
    url: 'https://dissect.kossmo.tech',
    description: 'Decompose any word through its etymological roots.',
    tags: ['etymology', 'language', 'interactive'],
    color: '#2563EB',
    status: 'coming-soon',
  },
  {
    name: 'Cage',
    slug: 'cage',
    url: 'https://cage.kossmo.tech',
    description: 'Add constraints, reshape the experience.',
    tags: ['constraints', 'generative', 'interaction'],
    color: '#DC2626',
    status: 'coming-soon',
  },
];
