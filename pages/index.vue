<template lang="pug">
  section
    h1.header Nuxt TypeScript Starter
    div.cards
      Card(v-for="person in people" :key="person.id" :person="person")
</template>

<script lang="ts">
import { Person } from '~/types'
import { State } from 'vuex-class'
import { Component, Vue } from 'nuxt-property-decorator'
import Card from '~/components/Card.vue'

@Component({
  components: {
    Card,
  },
})
export default class extends Vue {
  @State people: Person
}
</script>

<style lang="stylus" scoped>
.header {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
