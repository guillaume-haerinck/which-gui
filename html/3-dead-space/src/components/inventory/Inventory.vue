<template>
  <div class="inventory">
    <Items></Items>
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

</style>
