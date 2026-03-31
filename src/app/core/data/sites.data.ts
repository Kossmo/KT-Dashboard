import { Site } from '../models/site.model';

export const SITES: Site[] = [
  {
    name: 'Dissect',
    slug: 'dissect',
    url: 'https://dissect.kossmo.tech',
    description: 'Decompose any word through its etymological roots.',
    tags: ['etymology', 'language', 'interactive'],
    color: '#2563EB',
    status: 'live',
  },
  {
    name: 'Seismic',
    slug: 'seismic',
    url: 'https://seismic.kossmo.tech',
    description: 'Real-time earthquake visualization with sonification.',
    tags: ['data', 'map', 'audio', 'real-time'],
    color: '#FF5032',
    status: 'coming-soon',
  },
  {
    name: 'Echo',
    slug: 'echo',
    url: 'https://echo.kossmo.tech',
    description: 'Visualize your voice as geometric shapes in real-time.',
    tags: ['voice', 'generative', 'audio', 'canvas'],
    color: '#8B5CF6',
    status: 'coming-soon',
  },
];
