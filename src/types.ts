export type User = {
  name: string;
  age: number;
  roles: string[];
  createdAt: Date;
  isDeleated: boolean;
};

export type RequestType = {
  method: string;
  host: string;
  path: string;
  body?: User;
  params?: {
    [key: string]: string;
  };
};

export type ObserverHandlers = {
  next: (value: RequestType) => void;
  error: (error: Error) => void;
  complete: () => void;
};
