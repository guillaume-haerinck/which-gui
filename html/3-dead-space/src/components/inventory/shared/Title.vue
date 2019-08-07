<template>
  <div class="title">{{ title }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: {
    title: String
  }
})
export default class Title extends Vue {
}
</script>

<style scoped lang="scss">
  .title {
    background: url('../../../assets/images/TitleSmall.png') center no-repeat;
    min-width: 180px;
    padding: 5px;
    background-size: contain;
    text-align: center;
  }
</style>
