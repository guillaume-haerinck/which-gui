<template>
  <div class="title" v-bind:class="{ large: isLarge }">{{ title }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: {
    title: String,
    isLarge: {
      type: Boolean,
      default: false
    }
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

  .large {
    background-image: url('../../../assets/images/TitleLarge.png');
    text-align: left;
    background-position: left;
  }
</style>
