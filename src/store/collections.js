import Axios from "axios";

const URL = "http://inibotnea.com:3010/api/collection/";

var config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("LoggedUser")}`,
    "Access-Control-Allow-Origin": "*",
  },
};

export default {
  state: {
    collections: [],
    updateCollection: {},
    newCollection: {},
    collectionById: {},
  },
  getters: {
    allCollections: (state) => state.collections,
    updateCollection: (state) => state.updateCollection,
    collectionById: (state) => state.collectionById
  },
  actions: {
    getCollections({ commit }) {
      Axios.get(URL).then((response) =>
        commit("SET_COLLECTIONS", response.data)
      );
    },
    getCollectionById({ commit }, collectionId) {
      Axios.get(URL + collectionId).then((response) => {
        commit("SET_COLLECTION_BY_ID", response.data);
      });
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

      Axios.put(URL + state.updateCollection.id, state.updateCollection, config)
        .then((response) => console.log(response))
        .finally(() => {
          dispatch("getCollections");
        });
    },
    deleteCollection({ state, dispatch }) {
      console.log(config);
      Axios.delete(URL + state.updateCollection.id, config)
        .then((response) => console.log(response))
        .finally(() => {
          dispatch("getCollections");
        });
    },
    addCollection({ dispatch }, newCollection) {
      newCollection["categories"] = [];

      Axios.post(URL, newCollection, config)
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
    SET_COLLECTION_BY_ID(state, collection) {
      state.collectionById = collection;
    },
  },
};
