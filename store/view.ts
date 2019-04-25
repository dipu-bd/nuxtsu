import { ViewState, RootState } from '~/types/state'
import { MutationTree, ActionTree, GetterTree } from 'vuex'

export const state = (): ViewState => ({
  drawer: true,
  title: 'Nuxt TypeScript Starter',
})

export const getters: GetterTree<ViewState, RootState> = {
  drawer(state: ViewState) {
    return state.drawer
  },
}

export const mutations: MutationTree<ViewState> = {
  toggleDrawer(state: ViewState): void {
    state.drawer = !state.drawer
  },
  setDrawer(state: ViewState, value: boolean): void {
    state.drawer = value
  },
}
