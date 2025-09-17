import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Static routes can be prerendered
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'login', renderMode: RenderMode.Prerender },
  { path: 'dashboard', renderMode: RenderMode.Prerender },

  // Dynamic routes like dashboard/:productName rendered on client
  { path: 'dashboard/:productName', renderMode: RenderMode.Client },

  // Catch-all route for 404s, rendered on client
  { path: '**', renderMode: RenderMode.Client }
];