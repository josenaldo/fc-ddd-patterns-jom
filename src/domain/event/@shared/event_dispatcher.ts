import EventInterface from '@/domain/event/@shared/event.interface'
import EventDispatcherInterface from '@/domain/event/@shared/event_dispatcher.interface'
import EventHandlerInterface from '@/domain/event/@shared/event_handler.interface'

export default class EventDispatcher implements EventDispatcherInterface {
  private _eventHandlers: { [eventName: string]: EventHandlerInterface[] } = {}

  get getEventhandlers(): { [eventName: string]: EventHandlerInterface[] } {
    return this._eventHandlers
  }

  notify(event: EventInterface): void {
    throw new Error('Method not implemented.')
  }

  register(
    event: string,
    eventHandler: EventHandlerInterface<EventInterface>
  ): void {
    if (!this._eventHandlers[event]) {
      this._eventHandlers[event] = []
    }

    if (this._eventHandlers[event].includes(eventHandler)) {
      return
    }

    this._eventHandlers[event].push(eventHandler)
  }

  unregister(
    event: string,
    eventHandler: EventHandlerInterface<EventInterface>
  ): void {
    if (!this._eventHandlers[event]) {
      this._eventHandlers[event] = []
      return
    }

    this._eventHandlers[event] = this._eventHandlers[event].filter(
      (handler) => handler !== eventHandler
    )
  }

  unregisterAll(): void {
    this._eventHandlers = {}
  }
}
