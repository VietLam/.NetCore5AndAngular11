import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor() { }

  formData: PaymentDetail = new PaymentDetail();
}
