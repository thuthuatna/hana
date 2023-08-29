import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PAYMENT_MICROSERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.PAYMENTS_MICROSERVICE_HOST as string | '0.0.0.0',
          port: process.env.PAYMENTS_MICROSERVICE_PORT as unknown as
            | number
            | 3002,
        },
      },
    ]),
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
