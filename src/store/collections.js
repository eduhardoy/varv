import Axios from "axios";

const URL = "https://varvlab.com/api/collection/";

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
    collections: [],
    updateCollection: {},
    newCollection: {
      categories: [],
    },
    collectionById: {},
  },
  getters: {
    allCollections: (state) => state.collections,
    updateCollection: (state) => state.updateCollection,
    collectionById: (state) => state.collectionById,
  },
  actions: {
    getCollections({ commit, dispatch }) {
      dispatch("setLoader", true);
      Axios.get(URL)
        .then((response) => commit("SET_COLLECTIONS", response.data))
        .finally(() => {
          dispatch("setLoader", false);
        });
    },
    getCollectionById({ commit, dispatch }, collectionId) {
      dispatch("setLoader", true);
      Axios.get(URL + collectionId)
        .then((response) => {
          commit("SET_COLLECTION_BY_ID", response.data);
        })
        .finally(() => {
          dispatch("setLoader", false);
        });
    },
    setUpdateCollection({ commit }, collection) {
      commit("SET_UPDATE_COLLECTION", collection);
    },
    updateCollection({ state, dispatch }) {
      dispatch("setLoader", true);
      let arrCategories = [];
      // console.log(state.updateCollection.categories)

      state.updateCollection.categories.forEach((element) => {
        arrCategories.push(element.id);
      });

      state.updateCollection["categories"] = arrCategories;

      Axios.put(
        URL + state.updateCollection.id,
        state.updateCollection,
        config(localStorage.getItem("LoggedUser"))
      )
        .then((response) => console.log(response))
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.data && err.response.data.expired == true)
            dispatch("expired");
        })
        .finally(() => {
          dispatch("getCollections");
          dispatch("setLoader", false);
        });
    },
    deleteCollection({ state, dispatch }) {
      dispatch("setLoader", true);
      console.log(config);
      Axios.delete(
        URL + state.updateCollection.id,
        config(localStorage.getItem("LoggedUser"))
      )
        .then((response) => console.log(response))
        .finally(() => {
          dispatch("getCollections");
          dispatch("setLoader", false);
        });
    },
    addCollection({ dispatch }, newCollection) {
      dispatch("setLoader", true);
      let arrCategories = [];

      newCollection.categories.forEach((element) => {
        arrCategories.push(element.id);
      });

      newCollection["categories"] = arrCategories;

      Axios.post(URL, newCollection, config(localStorage.getItem("LoggedUser")))
        .then((response) => console.log(response))
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.data && err.response.data.expired == true)
            dispatch("expired");
        })
        .finally(() => {
          dispatch("getCollections");
          dispatch("setLoader", false);
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
