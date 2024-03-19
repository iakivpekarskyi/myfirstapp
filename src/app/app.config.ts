import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
};

// import { ApplicationConfig, InjectionToken } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// export const API_URL = new InjectionToken<string>('API_URL');

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     {
//       provide: 'API_URL',
//       useValue: 'https://jsonplaceholder.typicode.com',
//     },
//     provideClientHydration(),
//     provideHttpClient(),
//     provideAnimationsAsync(),
//   ],
// };
