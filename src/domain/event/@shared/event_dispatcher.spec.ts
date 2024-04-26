import EventDispatcher from '@/domain/event/@shared/event_dispatcher'
import SendEmailWhenProductisCreatedHandler from '@/domain/event/product/handler/send_email_when_product_is_created.handler'

describe('Domain events tests', () => {
  it('should register event handler', () => {
    const eventDispatcher = new EventDispatcher()

    const eventHandler = new SendEmailWhenProductisCreatedHandler()

    eventDispatcher.register('ProductCreatedEvent', eventHandler)

    const productCreateEventHandlers =
      eventDispatcher.getEventhandlers['ProductCreatedEvent']

    expect(productCreateEventHandlers).toBeDefined()
    expect(productCreateEventHandlers).toHaveLength(1)
    expect(productCreateEventHandlers[0]).toMatchObject(eventHandler)
  })

  it('should unregister event handler', () => {
    // Arrange - Given
    const eventDispatcher = new EventDispatcher()
    const eventHandler = new SendEmailWhenProductisCreatedHandler()
    eventDispatcher.register('ProductCreatedEvent', eventHandler)

    // Act - When
    eventDispatcher.unregister('ProductCreatedEvent', eventHandler)

    // Assert - Then
    const productCreateEventHandlers =
      eventDispatcher.getEventhandlers['ProductCreatedEvent']

    expect(productCreateEventHandlers).toBeDefined()
    expect(productCreateEventHandlers).toHaveLength(0)
  })

  it('should not register event handler if it is already registered', () => {
    // Arrange - Given
    const eventDispatcher = new EventDispatcher()
    const eventHandler = new SendEmailWhenProductisCreatedHandler()
    eventDispatcher.register('ProductCreatedEvent', eventHandler)

    // Act - When
    eventDispatcher.register('ProductCreatedEvent', eventHandler)

    // Assert - Then
    const productCreateEventHandlers =
      eventDispatcher.getEventhandlers['ProductCreatedEvent']

    expect(productCreateEventHandlers).toBeDefined()
    expect(productCreateEventHandlers).toHaveLength(1)
  })

  it('should unregister all event handlers', () => {
    // Arrange - Given
    const eventDispatcher = new EventDispatcher()
    const eventHandler = new SendEmailWhenProductisCreatedHandler()
    eventDispatcher.register('ProductCreatedEvent', eventHandler)

    // Act - When
    eventDispatcher.unregisterAll()

    // Assert - Then
    const productCreateEventHandlers =
      eventDispatcher.getEventhandlers['ProductCreatedEvent']

    expect(productCreateEventHandlers).toBeUndefined()
  })

  it('should do nothing if unregister event handler that is not registered', () => {
    // Arrange - Given
    const eventDispatcher = new EventDispatcher()
    const eventHandler = new SendEmailWhenProductisCreatedHandler()

    // Act - When
    eventDispatcher.unregister('ProductCreatedEvent', eventHandler)

    // Assert - Then
    const productCreateEventHandlers =
      eventDispatcher.getEventhandlers['ProductCreatedEvent']

    expect(productCreateEventHandlers).toBeDefined()
    expect(productCreateEventHandlers).toHaveLength(0)
  })

  it('should notify event handlers', () => {})

  it('should not notify unregistered event handlers', () => {})
})
