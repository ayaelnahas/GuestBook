import userAccountService from "../../services/userAccountService";
import router from './../../router/index';

export const userAccount = {
  //   namespaced: true,
  state,
  mutations,
  actions,
};

const user = JSON.parse(localStorage.getItem("user"));
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

const mutations = {
  loginRequest(state, user) {
    state.user = user;
    state.status.loggedIn = true;
  },
  logoutRequest(state) {
    state.user = null;
    state.status.loggedIn = false;
  },
  registerRequest(state,userRegistered) {
    state.user = userRegistered;
  },
};
const actions = {
  async login(state, { email, password }) {
    const user = await userAccountService.login(email, password);
    state.commit("loginRequest", user);
  },
  logout(state) {
    userAccountService.logout();
    state.commit("logoutRequest");
  },
  async register(state, user) {
    const userRegistered = await userAccountService.register(user)
    state.commit('registerRequest',userRegistered)
    router.push('/login');
  },
};
