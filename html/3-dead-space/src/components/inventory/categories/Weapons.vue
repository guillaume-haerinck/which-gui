<template>
  <div>
    <Title></Title>
    <div class="weapons-container">
      <div class="weapon top">I'm a weapon</div>
      <div class="weapon left">I'm a weapon</div>
      <div class="weapon right">I'm a weapon</div>
      <div class="weapon bottom">I'm a weapon</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Title from "../shared/Title.vue";

@Component({
  components: {
    Title
  }
})
export default class Weapons extends Vue {}
</script>

<style scoped lang="scss">
.weapons-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);

  .top {
    grid-row: 1;
    grid-column: 1 / 3;
    justify-self: center;
  }

  .left {
    grid-row: 2;
    grid-column: 1;
    justify-self: end;
  }

  .right {
    grid-row: 2;
    grid-column: 2;
  }

  .bottom {
    grid-row: 3;
    grid-column: 1 / 3;
    justify-self: center;
  }
}
</style>
