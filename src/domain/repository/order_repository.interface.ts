import Order from '@/domain/entity/order'
import RepositoryInterface from '@/domain/repository/repository.interface'

export default interface OrderRepositoryInterface
  extends RepositoryInterface<Order> {}
