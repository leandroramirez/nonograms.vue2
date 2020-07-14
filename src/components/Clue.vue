<template>
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    class="nng-clue"
    :style="`background: ${clue.realColor}; color: ${clue.textColor};`"
  >
    <foreignObject width="100%" height="100%">{{ clue.length }}</foreignObject>
  </svg>
</template>

<script>
export default {
  props: {
    clue: Object,
    colors: Object
  }
};
</script>

<style>
.nng-clue {
  border: 1px solid #333; /* It's not possible to use percentage unit as border width (as ussually, there are hacks, but I'm not going to implement one of them at least in this version) */
  box-shadow: inset -1px 2px 8px -5px; /* Same comment */
  font-size: 5em;
  line-height: 1.3em;
  text-align: center;
}
</style>
