<template>
  <div class="nng-vertical-clues" :style="`grid-template-rows: repeat(${maxLength}, 1fr);`">
    <template v-for="clueGroup in clues">
      <div v-for="clue in maxLength - clueGroup.length" class="nng-square nng-square-empty"/>
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
  grid-gap: 1px;
  background: #333;
  border: 1px solid #333;
}
</style>
