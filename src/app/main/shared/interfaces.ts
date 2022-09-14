export interface Environment {
  production: boolean;
  fbDbUrl: string;
  fbUrlAuth: string;
  firebaseConfig: any;
}

export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface Post {
  id?: string;
  title: string;
  text: string;
  author: string;
  date: Date;
}

export type AlertType = 'success' | 'danger' | 'warning'

export interface Alert {
  type: AlertType;
  text: string
}
