import { Injectable } from '@angular/core';


@Injectable()
export class AppState {
  
  constructor() {
    this._state = {};
  }

  // already return a clone of the current state
  get state() {
    return this._state = this._clone(this._state);
  }

  get(prop) {
    // use our state getter for the clone
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  set(prop, value) {
    // internally mutate our state
    return this._state[prop] = value;
  }

  _clone(object) {
    // simple object clone
    return JSON.parse(JSON.stringify( object ));
  }
}
