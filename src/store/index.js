import { createStore } from "vuex";
import counterStore from "./counter";

export default createStore({
  modules: {
    //metodo mas simple para poner modulos
    counter: counterStore, //me invento un nombre y le envio el objeto
  },
});
