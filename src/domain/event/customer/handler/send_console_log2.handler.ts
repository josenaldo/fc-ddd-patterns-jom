import EventHandlerInterface from '@/domain/event/@shared/event_handler.interface'
import CustomerCreatedEvent from '@/domain/event/customer/customer_created.event'

export default class SendConsoleLog2Handler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log('Esse é o segundo console.log do evento: CustomerCreated')
  }
}
