export interface Restaurant {
  _id: string;
  name:     string;
  address:  string;
  lat:      number;
  long:      number;
  isActive: boolean;
  adminId:  string | null;
}