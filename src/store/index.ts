import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import { Session } from './models/session';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vue',
  storage: window.localStorage,
  // TODO add a filter here so we only save pertinent things to local storage.
});

type State = {
  session: null | Session;
};

const state: State = { session: null };

// TODO: implement with direct-vuex for strong typing and export an interface instead
export default new Vuex.Store({
  state,
  getters: {
    getSession: state => () => {
      return state.session;
    },
  },
  // must be syncrounous
  mutations: {
    createSession: (
      state,
      params: { userName: string; token: string; expirationDate: Date }
    ) => {
      state.session = new Session({
        userName: params.userName,
        token: params.token,
        expirationDate: params.expirationDate,
      });
    },
  },
  // async goes in actions
  actions: {
    createSession(
      { commit },
      payload: { userName: string; token: string; expirationDate: Date }
    ) {
      commit('createSession', payload);
    },
  },
  modules: {},
  plugins: [vuexLocalStorage.plugin],
});
