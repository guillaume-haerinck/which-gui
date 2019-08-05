<template>
  <div>
    <Title title="Nodes"></Title>
    <div>I'm the nodes</div>
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
export default class Nodes extends Vue {
}
</script>

<style scoped lang="scss">

</style>
