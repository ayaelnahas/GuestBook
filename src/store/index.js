import Vue from "vue";
import Vuex from "vuex";
import * as userAccountModule from "./modules/userAccountModule";
import * as messagesModule from "./modules/messagesModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    userAccountModule,
    messagesModule
  },
});
