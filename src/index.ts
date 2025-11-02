import { handleRequest, handleError, handleComplete } from './handlers';
import { requestsMock } from './mocks';
import Observable from './observer/Observable';

const requests$ = Observable.from(requestsMock);

const subscription = requests$.subscribe({
  next: handleRequest,
  error: handleError,
  complete: handleComplete,
});

subscription.unsubscribe();
