/* eslint @typescript-eslint/no-unused-vars: 0 */
import Order from '@/entity/order'
import OrderItem from '@/entity/order_item'

describe('Order unit tests', () => {
  it('should throw erro when id is empty', () => {
    expect(() => {
      const order = new Order('', '123', []) //NOSONAR
    }).toThrow('ID is required')
  })

  it('should throw error when customerId is empty', () => {
    expect(() => {
      const order = new Order('1', '', []) //NOSONAR
    }).toThrow('Customer ID is required')
  })

  it('should have at least one item', () => {
    expect(() => {
      const order = new Order('1', '123', []) //NOSONAR
    }).toThrow('Items are required')
  })

  it('should calculate total', () => {
    const item1: OrderItem = new OrderItem('1', 'item 1', 100)
    const item2: OrderItem = new OrderItem('2', 'item 2', 50)

    const order1 = new Order('1', '1', [item1])
    const order1Total = order1.total()
    expect(order1Total).toBe(100)

    const order2 = new Order('2', '1', [item1, item2])
    const order2Total = order2.total()
    expect(order2Total).toBe(150)
  })
})
