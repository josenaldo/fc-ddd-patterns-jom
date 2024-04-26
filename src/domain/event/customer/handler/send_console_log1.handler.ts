import EventHandlerInterface from '@/domain/event/@shared/event_handler.interface'
import CustomerCreatedEvent from '@/domain/event/customer/customer_created.event'

export default class SendConsoleLog1Handler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log('Esse é o primeiro console.log do evento: CustomerCreated')
  }
}
