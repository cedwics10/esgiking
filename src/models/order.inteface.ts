export enum OrderStatus {
  PENDING    = 'en qttente',
  PREPARING  = 'en préparation',
  READY      = 'prêt',
  DELIVERING = 'en livraison',
  DELIVERED  = 'livré',
  CANCELLED  = 'annulé',
}

export enum OrderType {
  ONSITE   = 'borne',
  REMOTE   = 'livraison', 
}

export interface Order {
  customerId:      string;
  restaurantId:    string;
  items:           string[];
  status:          OrderStatus;
  type:            OrderType;
  total:           number;
  deliveryAddress: string | null;
  createdAt:       Date;
}


