<template>
    <Inventory></Inventory>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Inventory from '../components/inventory/Inventory.vue';

@Component({
  components: {
    Inventory
  },
})
export default class Hud extends Vue {
}
</script>

<style scoped lang="scss">

</style>
