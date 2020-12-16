import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate";
import Vue from 'vue'
import config from './../config/config.json'
import SecureLS from "secure-ls";
var ls = new SecureLS({encodingType: 'des', isCompression: false, encryptionSecret: config.secure_key});

Vue.use(Vuex)

var ls_plugin = createPersistedState({
  paths : [
    'token'
  ],
  storage: {
    getItem: (key) => ls.get(key),
    setItem: (key, value) => ls.set(key, value),
    removeItem: (key) => ls.remove(key),
  },
})

const store = new Vuex.Store({
    
    state: {
      token: ""
    },
    mutations: {
      set_state(state,data_obj){
        state[data_obj.state] = data_obj.data            
      }
    },
    plugins: [ls_plugin],
})

export default store;