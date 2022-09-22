import getRandomInt from "../../helpers/getRandomInt";

const counterStore = {
  namespaced: true,
  state: () => ({
    count: 1,
    lastMutation: "mesi",
    isLoading: false,
  }),
  //modifican el state
  mutations: {
    //esto hara que mute el state
    increment(state) {
      //le pongo el nombre del state
      state.count++;
      state.lastMutation = "increment";
    },
    incrementBy(state, val) {
      state.count += val;
      state.lastMutation = "incrementBy";
    },
    setLoading(state, val) {
      state.isLoading = val;
    },
  },
  actions: {
    async incrementRndomInt({ commit }) {
      commit("setLoading", true); //llamo la mutacion y le envio el valor true
      const randomInt = await getRandomInt();
      commit("incrementBy", randomInt); //estoy llamando la mutacion para poder mutar el state
      commit("setLoading", false); //cambio la mutacion en false de nueco cuando ya tenfo el numero random
    },
  },
  getters: {
    squareCount(state) {
      return state.count * state.count;
    },
  },
};

export default counterStore;
