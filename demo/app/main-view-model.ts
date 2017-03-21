import {Observable} from 'data/observable';
import {YourPlugin} from 'nativescript-yourplugin';

export class HelloWorldModel extends Observable {
  public message: string;
  private yourPlugin: YourPlugin;

  constructor() {
    super();
  }
}