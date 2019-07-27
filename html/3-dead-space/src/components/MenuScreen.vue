<template>
    <Inventory></Inventory>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Inventory from './inventory/Inventory.vue';

@Component({
  components: {
    Inventory,
  },
})
export default class MenuScreen extends Vue {
}
</script>

<style scoped lang="scss">

</style>
