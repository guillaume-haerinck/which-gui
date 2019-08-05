<template>
  <div class="inventory">
    <Weapons class="weapons"></Weapons>
    <Items class="items"></Items>

    <div class="misc">
      <Suit></Suit>
      <Nodes></Nodes>
      <Credits></Credits>
    </div>
  
    <KeyItems class="key-items"></KeyItems>
    <ItemDescription class="item-description"></ItemDescription>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Credits from './categories/Credits.vue';
import ItemDescription from './categories/ItemDescription.vue';
import Items from './categories/Items.vue';
import Nodes from './categories/Nodes.vue';
import Suit from './categories/Suit.vue';
import Weapons from './categories/Weapons.vue';
import KeyItems from './categories/KeyItems.vue';

@Component({
  components: {
    Credits,
    ItemDescription,
    Items,
    Nodes,
    Suit,
    Weapons,
    KeyItems
  }
})
export default class Inventory extends Vue {
}
</script>

<style scoped lang="scss">
  .inventory {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    .weapons {
      grid-row: 1;
      grid-column: 1;
    }

    .items {
      grid-row: 1;
      grid-column: 2;
    }

    .key-items {
      grid-row: 2;
      grid-column: 1;
    }

    .item-description {
      grid-row: 2;
      grid-column: 2 / 4;
    }
  }
</style>
