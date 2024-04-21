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
})
