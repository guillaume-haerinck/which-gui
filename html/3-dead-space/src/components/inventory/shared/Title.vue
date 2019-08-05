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
    background-image: url('../../../assets/images/TitleSmall.png');
    background-repeat: no-repeat;
    padding: 5px;
    background-size: contain;
    background-position: center;
    text-align: center;
  }
</style>
