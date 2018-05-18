// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCd1rOgXMw9BAhWbWQInd8uDGi48lYfREI',
    authDomain: 'track-my-gaming-mx.firebaseapp.com',
    databaseURL: 'https://track-my-gaming-mx.firebaseio.com',
    projectId: 'track-my-gaming-mx',
    storageBucket: 'track-my-gaming-mx.appspot.com',
    messagingSenderId: '807332739044'
  }
};
