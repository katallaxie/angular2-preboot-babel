import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DataResolver {

  resolve(route, state) {
    console.group(`Resolving`);
    console.info(route, state);
    console.groupEnd();

    return Observable.of({ res: 'I am data'});
  }
}

// an array of services to resolve routes with data
export const APP_RESOLVER_PROVIDERS = [
  DataResolver,
];
