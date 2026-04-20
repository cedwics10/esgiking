export interface Promotion {
  label:         string;
  discountValue: number;
  startDate:     Date;
  endDate:       Date;
  products:      string[];
  restaurantId:  string;
}