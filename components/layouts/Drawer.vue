<template lang="pug">
  v-navigation-drawer(v-model="drawer" clipped fixed app)
    v-list
      v-list-tile(to="/" avatar ripple)
          v-list-tile-avatar
            v-icon dashboard
          v-list-tile-content
            v-list-tile-title Dashboard
      v-divider
      v-list-tile(to="/create/something" avatar ripple)
        v-list-tile-avatar
          v-icon add_to_photos
        v-list-tile-content
          v-list-tile-title Create Something
      v-list-tile(to="/create/anything" avatar ripple)
        v-list-tile-avatar
          v-icon group_add
        v-list-tile-content
          v-list-tile-title Create Anything
      v-divider
      v-list-tile(to="/configs" avatar ripple)
        v-list-tile-avatar
          v-icon tune
        v-list-tile-content
          v-list-tile-title Configurations
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  get drawer() {
    return this.$store.state.view.drawer
  }
  set drawer(value) {
    this.$store.commit('view/setDrawer', value)
  }
}
</script>
