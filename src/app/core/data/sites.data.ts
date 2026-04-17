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
    screenshot: 'screenshots/dissect.jpg',
  },
  {
    name: 'Seismic',
    slug: 'seismic',
    url: 'https://seismic.kossmo.tech',
    description: 'Real-time earthquake visualization with sonification.',
    tags: ['data', 'map', 'audio', 'real-time'],
    color: '#FF5032',
    status: 'live',
    screenshot: 'screenshots/seismic.jpg',
  },
  {
    name: 'Echo',
    slug: 'echo',
    url: 'https://echo.kossmo.tech',
    description: 'Visualize your voice as geometric shapes in real-time.',
    tags: ['voice', 'generative', 'audio', 'canvas'],
    color: '#8B5CF6',
    status: 'live',
    screenshot: 'screenshots/echo.jpg',
  },
  {
    name: 'Microclimate',
    slug: 'microclimate',
    url: 'https://microclimate.kossmo.tech',
    description: 'Click anywhere on the globe for a 7-day forecast. Compare cities, rank them by comfort.',
    tags: ['weather', 'map', 'data', 'interactive'],
    color: '#0EA5E9',
    status: 'live',
    screenshot: 'screenshots/microclimate.jpg',
  },
];
