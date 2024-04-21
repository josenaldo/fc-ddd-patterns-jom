/* eslint @typescript-eslint/no-unused-vars: 0 */

import Address from '@/entity/address'
import Customer from '@/entity/customer'

describe('Customer unit testes', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      const customer = new Customer('', 'John Doe') // NOSONAR
    }).toThrow('ID is required')
  })

  it('should throw error when name is empty', () => {
    expect(() => {
      const customer = new Customer('1', '') // NOSONAR
    }).toThrow('Name is required')
  })

  it('should change name', () => {
    // Arrange - Given
    const customer = new Customer('1', 'John Doe')

    // Act - When
    customer.changeName('Jane Doe')

    // Assert - Then
    expect(customer.name).toBe('Jane Doe')
  })

  it('should throw error when change name to empty', () => {
    const customer = new Customer('1', 'John Doe')
    expect(() => {
      customer.changeName('')
    }).toThrow('Name is required')
  })

  it('should activate customer', () => {
    const customer = new Customer('1', 'John Doe')
    const address = new Address(
      'Rua José Lélis França',
      '1008',
      '38408234',
      'Uberlândia'
    )

    customer.Address = address
    customer.activate()

    expect(customer.isActive()).toBe(true)
  })

  it('should throw error when activate customer without address', () => {
    expect(() => {
      const customer = new Customer('1', 'John Doe')
      customer.activate()
    }).toThrow('Address is mandatory to activate a customer')
  })

  it('should deactivate customer', () => {
    const customer = new Customer('1', 'John Doe')
    customer.deactivate()
    expect(customer.isActive()).toBe(false)
  })
})
