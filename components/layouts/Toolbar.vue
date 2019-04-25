<template lang="pug">
  v-toolbar(fixed app clipped-left height="60")
    v-toolbar-side-icon(@click.stop="toggleDrawer()")
    v-toolbar-title
      a(href="/" style="text-decoration: none; color: inherit") {{ title }}
    v-spacer
    template(v-if="user")
      v-divider(vertical)
      v-btn(round flat v-ripple="false" style="text-transform: capitalize")
        v-icon person
        b.subheading.px-2 {{ (user.username || '').toLowerCase() }}
      v-btn(dark color="red" @click="logout") Logout
</template>

<script lang="ts">
import { State, Mutation } from 'vuex-class'
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @State((state) => state.auth.user) user: any
  @State((state) => state.view.title) title: string
  @Mutation('view/toggleDrawer') toggleDrawer
}
</script>
