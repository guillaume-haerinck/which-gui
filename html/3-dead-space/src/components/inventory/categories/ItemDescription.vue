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
  .top {
    background: url('../../../assets/images/TitleLarge.png') 0 0 no-repeat;
    height: 30px;
    text-align: left;
    padding-left: 10px;
  }

  .bottom {
    background: url('../../../assets/images/TitleLarge.png') 0 -33px no-repeat;
    height: 30px;
    text-align: left;
    padding-left: 10px;
  }
</style>
