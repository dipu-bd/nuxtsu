<template lang="pug">
  v-container.container(fluid fill-height)
    v-layout.layout(align-center justify-center)
      v-flex.xs-4(v-for="person in people" :key="person.id")
        Card(:person="person")
</template>

<script lang="ts">
import { Person } from '~/types'
import { State } from 'vuex-class'
import { Component, Vue } from 'nuxt-property-decorator'
import Card from '~/components/Card.vue'

@Component({
  layout: 'vuetify',
  components: {
    Card,
  },
})
export default class extends Vue {
  auth = false
  layout = 'vuetify'
  @State people: Person
}
</script>

<style scoped>
.container {
  background: #eee;
}
.layout {
  flex-wrap: wrap;
}
</style>
