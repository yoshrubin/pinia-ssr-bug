<template>
  <div>
    <h1>Reproduction</h1>
    <div v-for="i in 10">{{ i }}: {{ someStateValue }}</div>
  </div>
</template>

<script>
import { useReproStore } from "../stores/reproStore";
export default {
  name: "PiniaSsrBugReproduction",

  data() {
    return {};
  },
  computed: {
    someStateValue() {
      return useReproStore().getSomeState;
    },
  },
  mounted() {},

  methods: {},
};
</script>
