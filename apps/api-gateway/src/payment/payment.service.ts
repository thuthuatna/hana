import { MakePaymentDto } from '@nestjs-microservices/shared/dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('PAYMENT_MICROSERVICE') private readonly paymentClient: ClientProxy
  ) {}

  makePayment(makePaymentDto: MakePaymentDto) {
    this.paymentClient.emit('process_payment', makePaymentDto);
  }
}
