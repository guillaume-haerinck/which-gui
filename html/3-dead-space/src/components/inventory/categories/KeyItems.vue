<template>
  <div>
    <Title title="Key items"></Title>
    <div class="key-items">
      <Item backgroundImgSide="Left"></Item>
      <Item backgroundImgSide="Left"></Item>
      <Item backgroundImgSide="Left"></Item>
      <Item backgroundImgSide="Left"></Item>
      <Item backgroundImgSide="Left"></Item>
      <Item backgroundImgSide="Left"></Item>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Title from "../shared/Title.vue";
import Item from "../shared/Item.vue";

@Component({
  components: {
    Title,
    Item
  }
})
export default class KeyItems extends Vue {
}
</script>

<style scoped>
  .key-items {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
</style>
