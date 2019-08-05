<template>
  <div>
    <Title></Title>
    <div>I'm the suit</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Title from "../shared/Title.vue";

@Component({
  components: {
    Title
  }
})
export default class Suit extends Vue {
}
</script>

<style scoped lang="scss">

</style>
