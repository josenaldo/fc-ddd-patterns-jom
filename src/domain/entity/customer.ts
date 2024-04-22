import Address from '@/domain/entity/address'

export default class Customer {
  private _id: string
  private _name: string = ''
  private _address!: Address
  private _active: boolean = false
  private _rewardPoints: number = 0

  constructor(id: string, name: string) {
    this._id = id
    this._name = name
    this.validate()
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error('ID is required')
    }

    if (this._name.length === 0) {
      throw new Error('Name is required')
    }
  }

  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get rewardPoints() {
    return this._rewardPoints
  }

  set Address(address: Address) {
    this._address = address
  }

  changeName(name: string) {
    this._name = name
    this.validate()
  }

  isActive(): boolean {
    return this._active
  }

  activate() {
    if (this._address === undefined) {
      throw new Error('Address is mandatory to activate a customer')
    }
    this._active = true
  }

  deactivate() {
    this._active = false
  }

  addRewardPoints(points: number) {
    if (points <= 0 || isNaN(points) || !isFinite(points)) {
      throw new Error('Reward points must be a positive number')
    }

    this._rewardPoints += points
  }
}