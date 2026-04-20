export enum UserRole {
  BIGBOSS     = 'bigboss',
  ADMIN       = 'admin',
  CUSTOMER    = 'customer',
  PREPARATEUR = 'preparateur',
  LIVREUR     = 'livreur',
}

export interface User {
    _id: string;
    username: string;
    password: string;
    role: UserRole;
}