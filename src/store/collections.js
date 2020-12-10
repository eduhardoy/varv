import Axios from "axios";

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
      Axios.get("http://inibotnea.com:3010/api/collection").then((response) =>
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
        `http://localhost:3010/api/collection/${state.updateCollection.id}`,
        state.updateCollection
      )
        .then((response) => console.log(response))
        .finally(() => {
          dispatch("getCollections");
        });
    },
    deleteCollection({ state, dispatch }) {
      Axios.delete(
        `http://inibotnea.com:3010/api/collection/${state.updateCollection.id}`
      )
        .then((response) => console.log(response))
        .finally(() => {
          dispatch("getCollections");
        });
    },
    addCollection({ dispatch }, newCollection) {
      Axios.post(`http://inibotnea.com:3010/api/collection`, newCollection)
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
