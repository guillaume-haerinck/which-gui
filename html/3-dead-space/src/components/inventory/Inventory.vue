<template>
  <div class="inventory">
    <Weapons class="weapons"></Weapons>
    <Items class="items"></Items>

    <Credits></Credits>

    <Nodes></Nodes>
    <Suit></Suit>

    <ItemDescription></ItemDescription>
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

@Component({
  components: {
    Credits,
    ItemDescription,
    Items,
    Nodes,
    Suit,
    Weapons
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
  }
</style>
