import EventHandlerInterface from '@/domain/@shared/event/event_handler.interface'
import CustomerAddressChangedEvent from '@/domain/customer/event/customer_address_changed.event'

export default class SendConsoleLogCustomerAddressChangedHandler
  implements EventHandlerInterface<CustomerAddressChangedEvent>
{
  handle(event: CustomerAddressChangedEvent): void {
    const { id, name, Address } = event.eventData
    const endereco = `${Address.street}, ${Address.number}, ${Address.zipCode}, ${Address.city}`
    console.log(
      `Endereço do cliente: ${id}, ${name} alterado para: ${endereco}`
    )
  }
}
