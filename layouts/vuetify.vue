<template lang="pug">
  v-app
    toolbar
    drawer
    v-content
      nuxt
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Drawer from '~/components/layouts/Drawer.vue'
import Toolbar from '~/components/layouts/Toolbar.vue'

@Component({
  components: {
    Toolbar,
    Drawer,
  },
})
export default class extends Vue {}
</script>
