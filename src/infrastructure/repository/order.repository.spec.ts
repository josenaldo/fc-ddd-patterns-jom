import Address from '@/domain/entity/address'
import Customer from '@/domain/entity/customer'
import Order from '@/domain/entity/order'
import OrderItem from '@/domain/entity/order_item'
import Product from '@/domain/entity/product'
import CustomerModel from '@/infrastructure/db/sequelize/model/customer.model'
import OrderModel from '@/infrastructure/db/sequelize/model/order.model'
import OrderItemModel from '@/infrastructure/db/sequelize/model/order_item.model'
import ProductModel from '@/infrastructure/db/sequelize/model/product.model'
import CustomerRepository from '@/infrastructure/repository/customer.repository'
import OrderRepository from '@/infrastructure/repository/order.repository'
import ProductRepository from '@/infrastructure/repository/product.repository'
import { Sequelize } from 'sequelize-typescript'

describe('Order Repository unit tests', () => {
  let sequelize: Sequelize

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: {
        force: true,
      },
    })

    sequelize.addModels([
      CustomerModel,
      OrderModel,
      OrderItemModel,
      ProductModel,
    ])
    await sequelize.sync()
  })

  afterEach(async () => {
    await sequelize.close()
  })

  it('should create an order', async () => {
    const customerReopository = new CustomerRepository()
    const customer = new Customer('123', 'Customer 1')
    const address = new Address('123', 'Street 1', '11111222', 'Uberlândia')
    customer.changeAddress(address)
    await customerReopository.create(customer)

    const productRepository = new ProductRepository()
    const product = new Product('123', 'Product 1', 10)
    await productRepository.create(product)

    const orderItem = new OrderItem(
      '1',
      product.id,
      product.name,
      product.price,
      2
    )
    const order = new Order('123', customer.id, [orderItem])

    const orderRepository = new OrderRepository()
    await orderRepository.create(order)

    const orderModel = await OrderModel.findByPk(order.id, {
      include: [
        {
          model: OrderItemModel,
          as: 'items',
        },
      ],
    })

    expect(orderModel).not.toBeNull()
    expect(orderModel.toJSON()).toStrictEqual({
      id: order.id,
      customer_id: customer.id,
      total: order.total,
      items: [
        {
          id: orderItem.id,
          name: orderItem.name,
          price: orderItem.price,
          quantity: orderItem.quantity,
          order_id: order.id,
          product_id: product.id,
        },
      ],
    })
  })
})
