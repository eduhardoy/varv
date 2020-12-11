import Axios from "axios";
const URL = "http://inibotnea.com:3010/api/login"

export default {
  state: {
    auth: {},
  },
  getters: {
    token: (state) => state.auth.token,
  },
  actions: {
    getToken({ commit },loginForm) {
        Axios.post(URL,loginForm)
        .then(response => commit("SET_TOKEN",response.data))
    },
  },
  mutations: {
    SET_TOKEN(state, auth) {
      state.auth = {...auth};
    },
  },
};