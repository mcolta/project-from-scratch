import { HTTP_STATUS_OK, HTTP_STATUS_INTERNAL_SERVER_ERROR } from './constants';
import { RequestType } from './types';

export const handleRequest = (request: RequestType) => {
  console.log('handling request', request);
  return { status: HTTP_STATUS_OK };
};

export const handleError = (error: Error) => {
  console.error('handling error', error);
  return { status: HTTP_STATUS_INTERNAL_SERVER_ERROR };
};

export const handleComplete = () => console.log('complete');
