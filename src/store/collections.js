import Axios from "axios";

export default {
  state: {
    collections: [],
  },
  getters: {
    allCollections: (state) => state.collections,
  },

  actions: {
    getCollections({ commit }) {
      Axios.get("http://inibotnea.com:3010/api/collection").then((response) =>
        commit("SET_COLLECTIONS", response.data)
      );
    },
  },
  mutations: {
    SET_COLLECTIONS(state, collections) {
      state.collections = collections;
    },
  },
};
