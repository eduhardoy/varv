import Axios from "axios";

export default {
  state: {
    categories: [],
    updateCategory: {},
  },
  getters: {
    allCategories: (state) => state.categories,
    updateCategory: (state) => state.updateCategory,
  },

  actions: {
    getCategories({ commit }) {
      Axios.get("http://inibotnea.com:3010/api/category").then((response) =>
        commit("SET_CATEGORIES", response.data)
      );
    },
    updateCategory({ state }) {
      Axios.put(
        `http://inibotnea.com:3010/api/category/${state.updateCategory.id}`,
        state.updateCategory
      ).finally(() => {
        this.$store.dispatch("getCategories");
      });
    },
    setUpdateCategory({ commit }, updateCategory) {
      commit("SET_UPDATE_CATEGORY", updateCategory);
    },
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_UPDATE_CATEGORY(state, updateCategory) {
      state.updateCategory = updateCategory;
    },
  },
};
