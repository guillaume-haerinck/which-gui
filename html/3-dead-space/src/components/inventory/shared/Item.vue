<template>
  <div class="item" :style="background">I'm an item</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component<Item>({
  props: {
    backgroundImgSide: { type: String, default: 'Center' }
  }
})
export default class Item extends Vue {
  // Props
  backgroundImgSide!: String;

  // Computed
  get background() {
    return `background: url(${ require("../../../assets/images/ItemSlot-" + this.backgroundImgSide + ".png")  }) center no-repeat`;
  }
}
</script>

<style scoped lang="scss">
  .item {
    margin: 3px;
    min-width: 63px;
    min-height: 63px;
  }
</style>
