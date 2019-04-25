<template>
  <v-card class="mx-2 my-4" width="300px">
    <v-card-title>
      <h1 class="title">{{person.first_name}} {{person.last_name}}</h1>
    </v-card-title>
    <v-img
      :src="'https://robohash.org/' + person.first_name + '_' + person.last_name"
      :lazy-src="'https://robohash.org/' + person.first_name + '_' + person.last_name"
      height="300px"
    />
  </v-card>
</template>

<script lang="ts">
import { Person } from '~/types'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Card extends Vue {
  @Prop() person: Person
}
</script>

<style lang="stylus" scoped>
h1 {
  width: 100%;
  font-weight: 300;
  text-align: center;
}
</style>
