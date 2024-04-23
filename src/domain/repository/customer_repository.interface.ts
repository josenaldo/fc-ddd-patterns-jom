import Customer from '@/domain/entity/customer'
import RepositoryInterface from '@/domain/repository/repository.interface'

export default interface CustomerRepositoryInterface
  extends RepositoryInterface<Customer> {}
