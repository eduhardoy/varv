import Axios from "axios";

const URL = "http://inibotnea.com:3010/api/client/";

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
    clients: [],
    updateClient: {},
  },
  getters: {
    allClients: (state) => state.clients,
    updateClient: (state) => state.updateClient,
  },

  actions: {
    getClients({ commit, dispatch }) {
      dispatch("setLoader", true);
      Axios.get(URL)
        .then((response) => {
          commit("SET_CLIENTS", response.data);
        })
        .finally(() => {
          dispatch("setLoader", false);
        });
    },
    updateClient({ state, dispatch }) {
      dispatch("setLoader", true);
      Axios.put(
        URL + state.updateClient.id,
        state.updateClient,
        config(localStorage.getItem("LoggedUser"))
      )
        .then((response) => console.log(response))
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.data && err.response.data.expired == true)
            dispatch("expired");
        })
        .finally(() => {
          dispatch("getClients");
          dispatch("setLoader", false);
        });
    },
    setUpdateClient({ commit }, updateClient) {
      commit("SET_UPDATE_CLIENT", updateClient);
    },
    deleteClient({ state, dispatch }) {
      dispatch("setLoader", true);
      Axios.delete(
        URL + state.updateClient.id,
        config(localStorage.getItem("LoggedUser"))
      )
        .then((response) => console.log(response))
        .finally(() => {
          dispatch("getCategories");
          dispatch("setLoader", false);
        });
    },
    addClient({ dispatch }, newClient) {
      dispatch("setLoader", true);
      Axios.post(URL, newClient, config(localStorage.getItem("LoggedUser")))
        .then((response) => console.log(response))
        .catch((err) => {
          console.log(err.response.data);
          if (err.response.data && err.response.data.expired == true)
            dispatch("expired");
        })
        .finally(() => {
          dispatch("getClients");
          dispatch("setLoader", false);
        });
    },
  },
  mutations: {
    SET_CLIENTS(state, clients) {
      state.clients = clients;
    },
    SET_UPDATE_CLIENT(state, updateClient) {
      state.updateClient = { ...updateClient };
    },
  },
};
