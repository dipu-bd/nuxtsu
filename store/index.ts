import { Person, RootState } from '~/types'
import { MutationTree, ActionTree } from 'vuex'

export const state = (): RootState => ({
  people: [],
})

export const mutations: MutationTree<RootState> = {
  setPeople(state: RootState, people: Person[]): void {
    state.people = people
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    const people = await context.app.$axios.$get('/api/random-data')
    commit('setPeople', people)
  },
}
