<template>
  <div id="app">
    <MenuScreen></MenuScreen>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Hud from './pages/Hud.vue';

@Component({
  components: {
    Hud,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  
}
</style>
