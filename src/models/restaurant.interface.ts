export interface Restaurant {
  name:     string;
  address:  string;
  lat:      number;
  long:      number;
  isActive: boolean;
  adminId:  string | null;
}