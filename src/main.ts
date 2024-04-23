import Address from '@/domain/entity/address'
import Customer from '@/domain/entity/customer'
import Order from '@/domain/entity/order'
import OrderItem from '@/domain/entity/order_item'

const customer = new Customer('123', 'John Doe')
const address = new Address('Main Street', '123', '12345-678', 'São Paulo')
customer.changeAddress(address)
customer.activate()

const item1 = new OrderItem('1', '123', 'Item 1', 100, 10)
const item2 = new OrderItem('2', '456', 'Item 2', 100, 15)
const order = new Order('1', '123', [item1, item2])
console.log(order.toString())
