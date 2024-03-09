export interface DataJunior {
  city?: string | undefined
}

export interface Data {
    id?: number
    firstName?: string
    lastName?: string
    image?: string
    address?: DataJunior | undefined
  }