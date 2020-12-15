import { createStore } from 'vuex'
import collections from './collections'
import categories from './categories'
import auth from './auth'
import clients from './clients'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    collections,
    categories,
    auth,
    clients
  }
})
