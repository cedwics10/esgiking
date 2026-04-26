import { UserRole } from '../models/User.interface';

export enum Permission {
  MANAGE_RESTAURANTS    = 'manage_restaurants',
  VIEW_ALL_RESTAURANTS  = 'view_all_restaurants',

  MANAGE_PRODUCTS       = 'manage_products',
  VIEW_CATALOGUE        = 'view_catalogue',

  PLACE_ORDER           = 'place_order',
  VIEW_ORDERS           = 'view_orders',
  MANAGE_ORDERS         = 'manage_orders',
  PREPARE_ORDERS        = 'prepare_orders',
  DELIVER_ORDERS        = 'deliver_orders',

  CREATE_ADMIN          = 'create_admin',
}

type RolePermissionsMap = Record<UserRole, Permission[]>;

export const ROLE_PERMISSIONS: RolePermissionsMap = {
  [UserRole.BIGBOSS]: [
    Permission.MANAGE_RESTAURANTS,
    Permission.VIEW_ALL_RESTAURANTS,
    Permission.CREATE_ADMIN,
    Permission.VIEW_ORDERS,
  ],
  [UserRole.ADMIN]: [
    Permission.MANAGE_PRODUCTS,
    Permission.VIEW_CATALOGUE,
    Permission.VIEW_ORDERS,
    Permission.MANAGE_ORDERS,
  ],
  [UserRole.CUSTOMER]: [
    Permission.VIEW_CATALOGUE,
    Permission.PLACE_ORDER,
  ],
  [UserRole.PREPARATEUR]: [
    Permission.VIEW_ORDERS,
    Permission.PREPARE_ORDERS,
  ],
  [UserRole.LIVREUR]: [
    Permission.VIEW_ORDERS,
    Permission.DELIVER_ORDERS,
  ],
};

export const hasPermission = (role: UserRole, permission: Permission): boolean =>
  ROLE_PERMISSIONS[role]?.includes(permission) ?? false;