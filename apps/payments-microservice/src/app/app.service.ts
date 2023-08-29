import { MakePaymentDto } from '@nestjs-microservices/shared/dto';
import { User } from '@nestjs-microservices/shared/entities';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientProxy
  ) {}

  // onModuleInit() {
  //   this.authClient.subscribeToResponseOf('get_user');
  // }

  processPayment(makePaymentDto: MakePaymentDto) {
    const { userId, amount } = makePaymentDto;
    console.log('process payment');
    this.authClient.send('get_user', userId).subscribe((user: User) => {
      console.log(`process payment for user ${user.name} - amount: ${amount}`);
    });
  }
}
