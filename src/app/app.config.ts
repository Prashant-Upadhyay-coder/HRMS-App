import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { MyPreset } from './mythemes';
import { provideHttpClient } from '@angular/common/http';

import {YouTubePlayer, YOUTUBE_PLAYER_CONFIG} from '@angular/youtube-player';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
    provide: YOUTUBE_PLAYER_CONFIG,
    useValue: {
      loadApi: true,
      disablePlaceholder: true
    },
  },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
        darkModeSelector: '.p-dark',
          ripple: true, // Enable ripple effects
          inputStyle: 'outlined', // or 'filled'
           zIndex: { modal: 1100 } // Custom z-index if needed
        }
      },
     
    })
  ]
};