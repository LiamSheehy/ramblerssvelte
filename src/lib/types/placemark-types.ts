export interface Session {
  name: string;
  _id: string;
  token: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id?: string;
}

export interface Trektype {
  title: string;
  _id: string;
}

export interface Placemark {
  poi: string;
  level: string;
  trektype: Trektype | string;
  member: User | string;
  lat: number;
  lng: number;
}

export interface DataSet {
  labels: string[];
  datasets: [{ values: number[] }];
}

