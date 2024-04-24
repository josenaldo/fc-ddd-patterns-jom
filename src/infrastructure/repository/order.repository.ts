import Order from '@/domain/entity/order'
import OrderRepositoryInterface from '@/domain/repository/order_repository.interface'
import OrderModel from '@/infrastructure/db/sequelize/model/order.model'
import OrderItemModel from '@/infrastructure/db/sequelize/model/order_item.model'

export default class OrderRepository implements OrderRepositoryInterface {
  async create(order: Order): Promise<void> {
    await OrderModel.create(
      {
        id: order.id,
        customer_id: order.customerId,
        total: order.total,
        items: order.items.map((item) => ({
          id: item.id,
          product_id: item.productId,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
      },
      {
        include: [{ model: OrderItemModel }],
      }
    )
  }

  async update(order: Order): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async find(id: string): Promise<Order> {
    throw new Error('Method not implemented.')
  }

  async findAll(): Promise<Order[]> {
    throw new Error('Method not implemented.')
  }
}
