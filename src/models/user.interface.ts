export enum UserRole {
    root,
    creator,
    customer
}

export interface User {
    _id: string;
    nickname: string;
    password: string;
    role: UserRole;
}