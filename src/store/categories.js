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
    updateCategory({ state, dispatch }) {
      Axios.put(
        `http://inibotnea.com:3010/api/category/${state.updateCategory.id}`,
        state.updateCategory
      )
        .then((response) => console.log(response))
        .finally(() => {
          dispatch("getCategories");
        });
    },
    setUpdateCategory({ commit }, updateCategory) {
      commit("SET_UPDATE_CATEGORY", updateCategory);
    },
    deleteCategory({ state, dispatch }) {
      Axios.delete(
        `http://inibotnea.com:3010/api/category/${state.updateCategory.id}`
      )
        .then((response) => console.log(response))
        .finally(() => {
          dispatch("getCategories");
        });
    },
    addCategory({ dispatch }, newCategory) {
      Axios.post(`http://inibotnea.com:3010/api/category`, newCategory)
        .then((response) => console.log(response))
        .finally(() => {
          dispatch("getCategories");
        });
    },
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_UPDATE_CATEGORY(state, updateCategory) {
      state.updateCategory = { ...updateCategory };
    },
  },
};
