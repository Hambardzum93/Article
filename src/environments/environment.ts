// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Environment} from "../app/main/shared/interfaces";

export const environment: Environment = {
  production: false,
  fbDbUrl: 'https://blog22-ef40b-default-rtdb.europe-west1.firebasedatabase.app',
  fbUrlAuth: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
    firebaseConfig: {
    apiKey: "AIzaSyDrYiLpxB8_zgBOaoMLxoRYIs9I44fkp1s",
    authDomain: "blog22-ef40b.firebaseapp.com",
    projectId: "blog22-ef40b",
    storageBucket: "blog22-ef40b.appspot.com",
    messagingSenderId: "177965351932",
    appId: "1:177965351932:web:7ede261c00c60106b66879"
  }

}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
