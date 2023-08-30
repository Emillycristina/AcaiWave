export class CreateOrderDto {
  number_order?: number;
  options?: Array<any>;
  status: string;
  customer_id: number;
}
