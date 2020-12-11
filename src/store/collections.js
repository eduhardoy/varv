import Axios from "axios";

const URL = "http://inibotnea.com:3010/api/collection/"

export default {
  state: {
    collections: [],
    updateCollection: {},
    newCollection: {},
  },
  getters: {
    allCollections: (state) => state.collections,
    updateCollection: (state) => state.updateCollection,
  },
  actions: {
    getCollections({ commit }) {
      Axios.get(URL).then((response) =>
        commit("SET_COLLECTIONS", response.data)
      );
    },
    setUpdateCollection({ commit }, collection) {
      commit("SET_UPDATE_COLLECTION", collection);
    },
    updateCollection({ state, dispatch }) {
      let arrCategories = [];

      state.updateCollection.categories.forEach((element) => {
        arrCategories.push(element.id);
      });

      state.updateCollection["categories"] = arrCategories;

      Axios.put(
        URL + state.updateCollection.id,
        state.updateCollection
      )
        .then((response) => console.log(response))
        .finally(() => {
          dispatch("getCollections");
        });
    },
    deleteCollection({ state, dispatch }) {
      Axios.delete(
        URL + state.updateCollection.id
      )
        .then((response) => console.log(response))
        .finally(() => {
          dispatch("getCollections");
        });
    },
    addCollection({ dispatch }, newCollection) {
      Axios.post(URL, newCollection)
        .then((response) => console.log(response))
        .finally(() => {
          dispatch("getCollections");
        });
    },
  },
  mutations: {
    SET_COLLECTIONS(state, collections) {
      state.collections = collections;
    },
    SET_UPDATE_COLLECTION(state, collection) {
      state.updateCollection = { ...collection };
    },
    SET_NEW_COLLECTION(state, collection) {
      state.newCollection = { ...collection };
    },
  },
};
