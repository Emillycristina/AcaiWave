export class CreateOrderDto {
  number_order?: number;
  size_order?: Array<any>;
  options?: Array<any>;
  status: string;
  customer_id: number;
}
