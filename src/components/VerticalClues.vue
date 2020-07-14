<template>
  <div class="nng-vertical-clues" :style="`grid-template-rows: repeat(${maxLength}, 1fr);`">
    <template v-for="clueGroup in clues">
      <div v-for="clue in maxLength - clueGroup.length" class="nng-square"/>
      <Clue v-for="clue in clueGroup" :clue="clue" :colors="colors"/>
    </template>
  </div>
</template>

<script>
import Clue from "@/components/Clue";

export default {
  components: {
    Clue
  },
  props: {
    clues: Array,
    maxLength: Number,
    colors: Object
  }
};
</script>

<style>
.nng-vertical-clues {
  display: grid;
  grid-auto-flow: column;
}
</style>
