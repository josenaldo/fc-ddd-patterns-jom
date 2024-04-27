import ProductInterface from '@/domain/product/entity/product.interface'

export default class ProductB implements ProductInterface {
  private _id: string
  private _name: string
  private _price: number

  constructor(id: string, name: string, price: number) {
    this._id = id
    this._name = name
    this._price = price
    this.validate()
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error('ID is required')
    }

    if (this._name.trim().length === 0) {
      throw new Error('Name is required')
    }

    if (this._price <= 0) {
      throw new Error('Price must be greater than zero')
    }

    if (isNaN(this._price)) {
      throw new Error('Price must be a number')
    }

    if (!isFinite(this._price)) {
      throw new Error('Price must be a finite number')
    }
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get price(): number {
    return this._price * 2
  }

  changeName(name: string) {
    this._name = name
    this.validate()
  }

  changePrice(price: number) {
    this._price = price
    this.validate()
  }
}
