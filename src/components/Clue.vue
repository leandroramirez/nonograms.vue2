<template>
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    class="nng-square"
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
