<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct accerss:{{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRndomInt" :disabled="isLoading">Random</button>

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>

  <h2>Direct getter: {{ $store.getters["counter/squareCount"] }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    countComputed() {
      return this.$store.state.count;
    },
    ...mapState("counter", ["count", "lastMutation", "isLoading"]), //me trae lo que hay en store, tengo que poner el mismo nombre que puso en el store
  },
  methods: {
    increment() {
      this.$store.commit("counter/increment"); //con el commit llamo la mutacion y como parametro el nombre exacto
    },
    incrementBy() {
      this.$store.commit("counter/incrementBy", 5); //el nombre de la mutacion y el valor que le envio
    },
    //especifico cual es el modulo primnero y loego el nombre
    ...mapActions("counter", ["incrementRndomInt"]), //para llamar el action del store
  },
};
</script>

<style></style>
