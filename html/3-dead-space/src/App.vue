<template>
  <div id="app">
    <MenuScreen></MenuScreen>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuScreen from './components/MenuScreen.vue';

@Component({
  components: {
    MenuScreen,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  
}
</style>
