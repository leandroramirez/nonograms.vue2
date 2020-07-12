<template>
  <div>
    <div>Nada</div>
    <div>vertical</div>
    <div>ho2rizontal</div>
    <Grid/>
  </div>
</template>

<script>
import Grid from "@/components/Grid";

export default {
  components: {
    Grid
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
</style>
