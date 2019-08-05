<template>
  <div class="item-description">
    <div class="top">ITEM NAME</div>
    <div>I'm the item description</div>
    <div class="bottom">Buttons</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Title from "../shared/Title.vue";

@Component({
  components: {
    Title
  }
})
export default class ItemDescription extends Vue {
}
</script>

<style scoped lang="scss">
  .item-description {
    background: url('../../../assets/images/TitleLargeTop.png') top left no-repeat, 
      url('../../../assets/images/TitleLargeBottom.png') bottom left no-repeat;
    display: inline-grid;
    grid-template-rows: 32px 1fr 32px;
  }
</style>
