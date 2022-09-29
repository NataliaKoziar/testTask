export interface Idata {
  category: string
  name: string
  created: number
  content: string
  updated: string
  isArchived: boolean
  id: number | string
}

export interface TypeObj {
  [key: string]: {
    [key: string]: any
  }
}