import EventInterface from '@/domain/event/@shared/event.interface'

export default interface EventHandlerInterface<
  T extends EventInterface = EventInterface,
> {
  handle(event: T): void
}
