import Address from '@/domain/entity/address'
import Customer from '@/domain/entity/customer'
import EventDispatcher from '@/domain/event/@shared/event_dispatcher'
import CustomerAddressChangedEvent from '@/domain/event/customer/customer_address_changed.event'
import SendConsoleLogCustomerAddressChangedHandler from '@/domain/event/customer/handler/send_console_log_customer_address_changed.handler'

describe('Customer Address Changed Event tests ', () => {
  it('should notify a new CustomerAddressChangedEvent', () => {
    // Arrange - Given
    const eventDispatcher = new EventDispatcher()
    const eventHandler = new SendConsoleLogCustomerAddressChangedHandler()
    eventDispatcher.register('CustomerAddressChangedEvent', eventHandler)

    const spyOnHandler = jest.spyOn(eventHandler, 'handle')
    const spyOnConsoleLog = jest.spyOn(console, 'log')

    const customer = new Customer('123', 'John Doe')
    const address = new Address('Rua Street', '1', '12345678', 'Cidade 1')
    customer.changeAddress(address)

    const event = new CustomerAddressChangedEvent(customer)

    // Act - When
    eventDispatcher.notify(event)

    // Assert - Then
    expect(spyOnHandler).toHaveBeenCalledTimes(1)
    expect(spyOnHandler).toHaveBeenCalledWith(event)

    expect(spyOnConsoleLog).toHaveBeenCalledTimes(1)
    expect(spyOnConsoleLog).toHaveBeenNthCalledWith(
      1,
      'Endereço do cliente: 123, John Doe alterado para: Rua Street, 1, 12345678, Cidade 1'
    )
  })
})
