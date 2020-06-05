<template>
  <div>Mainpage</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({})
export default class MainPage extends Vue {
  head() {
    return {
      title: 'Mainpage',
      meta: [
        { hid: 'description', name: 'description', content: 'Description' }
      ]
    }
  }
}
</script>

<style>

</style>