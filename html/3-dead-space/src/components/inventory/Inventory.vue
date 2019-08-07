<template>
  <div class="app-inventory">
    <Weapons class="app-weapons"></Weapons>
    <Items class="app-items"></Items>

    <div class="app-misc">
      <Suit></Suit>
      <Nodes></Nodes>
      <Credits></Credits>
    </div>
  
    <KeyItems class="app-key-items"></KeyItems>
    <ItemDescription class="app-item-description"></ItemDescription>
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
  .app-inventory {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    .app-weapons {
      grid-row: 1;
      grid-column: 1;
    }

    .app-items {
      grid-row: 1;
      grid-column: 2;
    }

    .app-key-items {
      grid-row: 2;
      grid-column: 1;
    }

    .app-item-description {
      grid-row: 2;
      grid-column: 2 / 4;
    }
  }
</style>
