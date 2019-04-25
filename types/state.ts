import { Person } from '~/types'

export interface RootState {
  people: Person[]
}

export interface ViewState {
  title: string
  drawer: boolean
}
