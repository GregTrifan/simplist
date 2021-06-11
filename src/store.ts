import { createStore } from 'vuex'

// define your typings for the store state
export interface State {
  open: Boolean
  theme: Boolean
}

export const store = createStore<State>({
  state() {
    return {
      theme: false,
      open: false,
    }
  },
  mutations: {
    toggleTheme(state) {
      state.theme = !state.theme
    },
    closeMenu(state) {
      state.open = false
    },
    openMenu(state) {
      state.open = !state.open
    },
  },
})
