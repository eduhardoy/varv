

export default {
    state:{
        loading: false
    },
    getters:{
        isLoading: (state) => state.loading
    },
    actions:{
        setLoader({commit}, loading){
            commit("SET_LOADER", loading)
        }
    },
    mutations:{
        SET_LOADER(state, loading){
            state.loading = loading
        }
    }
}