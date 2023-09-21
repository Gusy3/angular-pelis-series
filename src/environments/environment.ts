// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  versions: ['Normal', 'Extendida'],
  genders: ['Acción', 'Animación', 'Aventuras', 'Biográfico', 'Bélico', 'Ciencia Ficción', 'Comedia', 'Crimen', 'Drama', 'Fantastico', 'Infantil', 'Intriga', 'Melodrama', 'Musical', 'Romance', 'Sobrenatural', 'Suspense', 'Terror', 'Thriller', 'Western'],
  resolutions: ['1080p', '720p'],
  codecs: ['x265', 'x264'],
  apiUrl: 'https://pelis-series-backend.onrender.com/api/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
