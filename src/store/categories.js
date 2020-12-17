import Axios from "axios";

const URL = "http://inibotnea.com:3010/api/category/";

var config = (token) => ({
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${localStorage.getItem("LoggedUser")}`,
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
  },
});

export default {
  state: {
    categories: [],
    updateCategory: {},
    selectedCateogry: "",
  },
  getters: {
    allCategories: (state) => state.categories,
    updateCategory: (state) => state.updateCategory,
    getSelectedCategory: (state) => state.selectedCateogry,
  },

  actions: {
    setSelectedCategory({ commit }, categoryId) {
      commit("SET_SELECTED_CATEGORY", categoryId);
    },
    getCategories({ commit }) {
      Axios.get(URL).then((response) => {
        commit("SET_SELECTED_CATEGORY", response.data[0].id);
        commit("SET_CATEGORIES", response.data);
      });
    },
    updateCategory({ state, dispatch }) {
      console.log(state.updateCategory);
      Axios.put(
        URL + state.updateCategory.id,
        state.updateCategory,
        config(localStorage.getItem("LoggedUser"))
      )
        .then((response) => console.log(response))
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.data && err.response.data.expired == true)
            dispatch("expired");
        })
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
        config(localStorage.getItem("LoggedUser"))
      )
        .then((response) => console.log(response))
        .finally(() => {
          dispatch("getCategories");
        });
    },
    addCategory({ dispatch }, newCategory) {
      Axios.post(URL, newCategory, config(localStorage.getItem("LoggedUser")))
        .then((response) => console.log(response))
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.data && err.response.data.expired == true)
            dispatch("expired");
        })
        .finally(() => {
          dispatch("getCategories");
        });
    },
  },
  mutations: {
    SET_SELECTED_CATEGORY(state, categoryId) {
      state.selectedCateogry = categoryId;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_UPDATE_CATEGORY(state, updateCategory) {
      state.updateCategory = { ...updateCategory };
    },
  },
};
