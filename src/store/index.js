import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  namespaced: true,
  state: {
    token: null,
    user: null,
  },
  getters: {
    authenticated(state) {
      return state.token && state.user;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    async login({ dispatch }, Credentials) {
      let response = await axios.post("auth/login", Credentials);

      return dispatch("attempt", response.data.token);
    },
    async attempt({ commit }, token) {
      if (token) {
        commit("SET_TOKEN", token);
      }
      if (!this.state.token) {
        return;
      }

      try {
        let response = await axios.get("auth/me");
        commit("SET_USER", response.data);
      } catch (e) {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      }
    },
    logout({ commit }) {
      return axios.post("auth/logout").then(() => {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
      });
    },
  },
});

export default store;
