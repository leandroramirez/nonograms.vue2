<template>
  <div class="nng-grid">
    <div v-for="value of pixelmap.pixels">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      pixelmap: {
        width: 3,
        height: 2,
        colors: {
          "0": "#ffffff", // The first item is the background color
          "1": "#000000"
        },
        pixels: Array.from("010101")
      }
    };
  },
  computed: {}
};
</script>

<style scoped>
.nng-grid {
}
</style>
