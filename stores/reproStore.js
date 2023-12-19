import { defineStore } from "pinia";

export const useReproStore = defineStore("reproStore", {
  state: () => ({
    someState: "someState",
  }),
  getters: {
    getSomeState: (state) => {
      console.log("getSomeState");
      return state.someState;
    },
  },
  actions: {},
});
