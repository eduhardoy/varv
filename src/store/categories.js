import Axios from "axios";

export default {
  state: {
    categories: [],
  },
  getters: {
    allCategories: (state) => state.categories,
  },

  actions: {
    getCategories({ commit }) {
      Axios.get("http://inibotnea.com:3010/api/category").then((response) =>
        commit("SET_CATEGORIES", response.data)
      );
    },
  },
  mutations: {
    SET_CATEGORIES(state, collections) {
      state.categories = collections;
    },
  },
};
