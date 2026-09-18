export interface Route {
  id: string;
  path: string;
  label: string;
}

export const ROUTES: Route[] = [
  { id: 'timeline', path: '#/timeline', label: 'Timeline' },
  { id: 'typical-pc', path: '#/typical-pc', label: 'Typical PC' },
  { id: 'build-a-pc', path: '#/build-a-pc', label: 'Build a PC' },
  { id: 'compare', path: '#/compare', label: 'Then vs Now' },
  { id: 'gallery', path: '#/gallery', label: 'Gallery' },
  { id: 'sources', path: '#/sources', label: 'Sources' },
];

export function parseRoute(hash: string): string {
  const match = hash.match(/^#\/([a-z0-9-]+)/);
  return match ? match[1] : 'timeline';
}
