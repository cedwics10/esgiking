export interface Discount {
  label:         string;
  percentage: number;
  startDate:     Date;
  endDate:       Date;
  products:      string[];
  restaurantId:  string;
}