import Address from '@/domain/entity/address'
import Customer from '@/domain/entity/customer'
import EventDispatcher from '@/domain/event/@shared/event_dispatcher'
import CustomerCreatedEvent from '@/domain/event/customer/customer_created.event'
import SendConsoleLog1Handler from '@/domain/event/customer/handler/send_console_log1.handler'
import SendConsoleLog2Handler from '@/domain/event/customer/handler/send_console_log2.handler'

describe('Customer Created Event tests', () => {
  it('should notify a new CustomerCreatedEvent', () => {
    // Arrange - Given

    const eventDispatcher = new EventDispatcher()
    const eventHandler1 = new SendConsoleLog1Handler()
    const eventHandler2 = new SendConsoleLog2Handler()
    eventDispatcher.register('CustomerCreatedEvent', eventHandler1)
    eventDispatcher.register('CustomerCreatedEvent', eventHandler2)

    const spyOnHandler1 = jest.spyOn(eventHandler1, 'handle')
    const spyOnHandler2 = jest.spyOn(eventHandler2, 'handle')
    const spyOnConsoleLog = jest.spyOn(console, 'log')

    const customer = new Customer('123', 'John Doe')
    const address = new Address('Rua Street', '1', '12345678', 'Cidade 1')
    customer.changeAddress(address)

    const event = new CustomerCreatedEvent(customer)

    // Act - When
    eventDispatcher.notify(event)

    // Assert - Then
    expect(spyOnHandler1).toHaveBeenCalledTimes(1)
    expect(spyOnHandler1).toHaveBeenCalledWith(event)
    expect(spyOnHandler2).toHaveBeenCalledTimes(1)
    expect(spyOnHandler2).toHaveBeenCalledWith(event)

    expect(spyOnConsoleLog).toHaveBeenCalledTimes(2)
    expect(spyOnConsoleLog).toHaveBeenNthCalledWith(
      1,
      'Esse é o primeiro console.log do evento: CustomerCreated'
    )
    expect(spyOnConsoleLog).toHaveBeenNthCalledWith(
      2,
      'Esse é o segundo console.log do evento: CustomerCreated'
    )
  })
})
