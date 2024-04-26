import EventHandlerInterface from '@/domain/@shared/event/event_handler.interface'
import CustomerCreatedEvent from '@/domain/customer/event/customer_created.event'

export default class SendConsoleLog1Handler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log('Esse é o primeiro console.log do evento: CustomerCreated')
  }
}
