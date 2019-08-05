<template>
    <div class="items">
        <Item v-for="n in 20">
        </Item>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Item from "../shared/Item.vue";

@Component({
  components: {
    Item
  }
})
export default class Items extends Vue {
}
</script>

<style scoped lang="scss">
    .items {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(4, 1fr);
    }
</style>
