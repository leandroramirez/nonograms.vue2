<template>
  <div class="nng-grid" :style="`grid-template-columns: repeat(${pixelmap.width}, 1fr);`">
    <div
      v-for="(value, index) of userPixels"
      class="nng-square"
      :style="`background: ${pixelmap.colors[value]}`"
      @click="click(index)"
    ></div>
    <div>{{ isResolved ? 'RESUELTO' : 'todavia no' }}</div>
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
      },
      selectedValue: null,
      userPixels: null
    };
  },
  created() {
    this.selectedValue = Object.keys(this.pixelmap.colors)[1];
    this.userPixels = Array(this.pixelmap.pixels.length).fill(
      this.backgroundValue
    );
  },
  methods: {
    click(index) {
      const currentValue = this.userPixels[index];
      const newValue =
        currentValue === this.selectedValue
          ? this.backgroundValue
          : this.selectedValue;

      this.$set(this.userPixels, index, newValue);
    }
  },
  computed: {
    backgroundValue() {
      return Object.keys(this.pixelmap.colors)[0];
    },
    isResolved() {
      const correctPixels = this.pixelmap.pixels;
      return (
        this.userPixels &&
        this.userPixels.every((value, index) => value === correctPixels[index])
      );
    }
  }
};
</script>

<style scoped>
.nng-grid {
  display: grid;
}
.nng-square {
  cursor: pointer;
  border-radius: 10%;
  border: 2px solid #000; /* It's not possible to use percentage unit as border width (as ussually, there are hacks, but I'm not going to implement one of them at least in this version) */
}

.nng-square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
</style>
