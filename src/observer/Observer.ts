import { ObserverHandlers, RequestType } from '../types';

class Observer {
  private handlers: ObserverHandlers;

  private isUnsubscribed: boolean;

  private unsubscribeFunction: () => void;

  constructor(handlers: ObserverHandlers) {
    this.handlers = handlers;
    this.isUnsubscribed = false;
  }

  next(value: RequestType) {
    if (this.handlers.next && !this.isUnsubscribed) {
      this.handlers.next(value);
    }
  }

  error(error: Error) {
    if (!this.isUnsubscribed) {
      if (this.handlers.error) {
        this.handlers.error(error);
      }

      this.unsubscribe();
    }
  }

  complete() {
    if (!this.isUnsubscribed) {
      if (this.handlers.complete) {
        this.handlers.complete();
      }

      this.unsubscribe();
    }
  }

  unsubscribe() {
    this.isUnsubscribed = true;

    if (this.unsubscribeFunction) {
      this.unsubscribeFunction();
    }
  }

  setUnsubscribeFunction(unsubscribeFunction: () => void) {
    this.unsubscribeFunction = unsubscribeFunction;
  }
}

export default Observer;
