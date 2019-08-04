<template>
    <div class="items">
        <div class="item" v-for="n in 20">
            <p>I'm an item</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
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
