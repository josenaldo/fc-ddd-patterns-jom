import Order from '@/entity/order'
import OrderItem from '@/entity/order_item'
import OrderService from '@/service/order.service'

describe('Order Service unit tests', () => {
  it('should get total of all orders', () => {
    // Arrange - Given
    const orderItem1: OrderItem = new OrderItem('1', '1', 'Product 1', 100, 1)
    const orderItem2: OrderItem = new OrderItem('2', '2', 'Product 2', 200, 2)

    const order1: Order = new Order('o1', 'c123', [orderItem1])
    const order2: Order = new Order('o2', 'c456', [orderItem2])

    // Act - When
    const total: number = OrderService.total([order1, order2])

    // Assert - Then
    expect(total).toBe(500)
  })
})
