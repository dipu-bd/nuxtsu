export * from './state'

export interface Person {
  id: number
  firstName: string
  lastName: string
  contact: Contact
  gender: string
  ipAddress: string
  avatar: string
  address: Address
}

export interface Contact {
  email: string
  phone: string
}

export interface Address {
  city: string
  country: string
  postalCode: string
  state: string
  street: string
}
