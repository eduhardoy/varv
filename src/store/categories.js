import Axios from "axios";

const URL = "http://inibotnea.com:3010/api/category/";

var config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("LoggedUser")}`,
    "Access-Control-Allow-Origin": "*",
  },
};

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
      Axios.get(URL).then((response) =>
        commit("SET_CATEGORIES", response.data)
      );
    },
    updateCategory({ state, dispatch }) {
      Axios.put(
        URL + state.updateCategory.id,
        state.updateCategory,
        config
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
        URL + state.updateCategory.id,
        config
      )
        .then((response) => console.log(response))
        .finally(() => {
          dispatch("getCategories");
        });
    },
    addCategory({ dispatch }, newCategory) {
      Axios.post(URL, newCategory, config)
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
