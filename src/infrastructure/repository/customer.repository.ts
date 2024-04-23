import Address from '@/domain/entity/address'
import Customer from '@/domain/entity/customer'
import CustomerRepositoryInterface from '@/domain/repository/customer_repository.interface'
import CustomerModel from '@/infrastructure/db/sequelize/model/customer.model'

export default class CustomerRepository implements CustomerRepositoryInterface {
  async create(customer: Customer): Promise<void> {
    if (customer.Address === undefined) {
      throw new Error('Address is mandatory to activate a customer')
    }

    await CustomerModel.create({
      id: customer.id,
      name: customer.name,
      street: customer?.Address?.street,
      number: customer?.Address?.number,
      zipCode: customer?.Address?.zipCode,
      city: customer?.Address?.city,
      active: customer.isActive(),
      rewardPoints: customer.rewardPoints,
    })
  }

  async update(customer: Customer): Promise<void> {
    await CustomerModel.update(
      {
        name: customer.name,
        street: customer?.Address?.street,
        number: customer?.Address?.number,
        zipCode: customer?.Address?.zipCode,
        city: customer?.Address?.city,
        active: customer.isActive(),
        rewardPoints: customer.rewardPoints,
      },
      {
        where: { id: customer.id },
      }
    )
  }

  async find(id: string): Promise<Customer> {
    const model = await CustomerModel.findByPk(id)
    if (!model) {
      throw new Error('Customer not found')
    }

    const customer = new Customer(model.id, model.name)

    const address = new Address(
      model.street,
      model.number,
      model.zipCode,
      model.city
    )
    customer.changeAddress(address)

    if (model.active) {
      customer.activate()
    }

    return customer
  }

  async findAll(): Promise<Customer[]> {
    const models = await CustomerModel.findAll()

    return models.map((model) => {
      const customer = new Customer(model.id, model.name)

      const address = new Address(
        model.street,
        model.number,
        model.zipCode,
        model.city
      )
      customer.changeAddress(address)

      if (model.active) {
        customer.activate()
      }

      return customer
    })
  }
}
