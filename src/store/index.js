import Vue from 'vue'
import Vuex from 'vuex'
import goods from './goods'
import user from './user'
import shared from './shared'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    goods,
    user,
    shared
  },
  strict: debug
})
