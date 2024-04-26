import EventHandlerInterface from '@/domain/event/@shared/event_handler.interface'
import ProductCreatedEvent from '@/domain/event/product/product_created.event'

export default class SendEmailWhenProductisCreatedHandler
  implements EventHandlerInterface<ProductCreatedEvent>
{
  handle(event: ProductCreatedEvent): void {
    console.log('Send email to user. Email Data: ', event.eventData)
  }
}
