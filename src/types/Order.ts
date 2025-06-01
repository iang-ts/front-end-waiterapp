export interface Order {
  orderNumber: string
  status: string
  account: string
  totalAmount: number
  paymentMethod: string
  paymentStatus: string
  customerInfo: CustomerInfo
  products: Product[]
  printed: boolean
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface CustomerInfo {
  name: string
  phone: string
}

export interface Product {
  product: Product2
  quantity: number
  _id: string
}

export interface Product2 {
  _id: string
  name: string
  description: string
  imagePath: string
  price: number
  account: string
  category: string
  ingredients: Ingredient[]
  hasStock: boolean
  stockQuantity: number
  isActive: boolean
  __v: number
}

export interface Ingredient {
  name: string
  icon: string
  _id: string
}
