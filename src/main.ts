import Address from '@/entity/address'
import Customer from '@/entity/customer'
import Order from '@/entity/order'
import OrderItem from '@/entity/order_item'

const customer = new Customer('123', 'John Doe')
const address = new Address('Main Street', '123', '12345-678', 'São Paulo')
customer.Address = address
customer.activate()

const item1 = new OrderItem('1', 'Item 1', 10)
const item2 = new OrderItem('2', 'Item 2', 15)
const order = new Order('1', '123', [item1, item2])
console.log(order.toString())
