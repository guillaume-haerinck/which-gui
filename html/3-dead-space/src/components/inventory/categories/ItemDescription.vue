<template>
  <div>
    <Title></Title>
    <div>I'm the item description</div>
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
export default class ItemDescription extends Vue {
}
</script>

<style scoped lang="scss">

</style>
