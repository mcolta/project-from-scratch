import { RequestType, ObserverHandlers } from '../types';
import Observer from './Observer';

class Observable {
  private subscribeFunction: (observer: Observer) => () => void;

  constructor(subscribe: (observer: Observer) => () => void) {
    this.subscribeFunction = subscribe;
  }

  static from(values: RequestType[]) {
    return new Observable((observer: Observer) => {
      values.forEach((value: RequestType) => observer.next(value));

      observer.complete();

      return () => {
        console.log('unsubscribed');
      };
    });
  }

  subscribe(obs: ObserverHandlers) {
    const observer = new Observer(obs);
    const unsubscribeCallback = this.subscribeFunction(observer);

    observer.setUnsubscribeFunction(unsubscribeCallback);

    return {
      unsubscribe() {
        observer.unsubscribe();
      },
    };
  }
}

export default Observable;
