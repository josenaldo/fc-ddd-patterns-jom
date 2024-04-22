import { v4 as uuid } from 'uuid'

import Customer from '@/domain/entity/customer'
import Order from '@/domain/entity/order'
import OrderItem from '@/domain/entity/order_item'

export default class OrderService {
  static total(orders: Order[]): number {
    return orders.reduce((acc: number, order: Order) => {
      return acc + order.total
    }, 0)
  }

  static placeOrder(customer: Customer, items: OrderItem[]): Order {
    if (items.length === 0) {
      throw new Error('Order must have at least one item')
    }

    const orderId: string = uuid()
    const order: Order = new Order(orderId, customer.id, items)
    const newRewardPoints = order.total / 2
    customer.addRewardPoints(newRewardPoints)

    return order
  }
}
