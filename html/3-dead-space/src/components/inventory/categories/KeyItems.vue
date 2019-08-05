<template>
  <div>
    <Title title="Key items"></Title>
    <div>I'm the key items</div>
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
export default class KeyItems extends Vue {
}
</script>

<style scoped lang="scss">

</style>
