<template>
  <v-dialog v-model="modal" width="50vw">
    <template v-slot:activator="{ on }">
      <v-card class="mx-2 my-4" ripple width="300px" color="blue lighten-3" v-on="on">
        <v-progress-circular indeterminate size="50" class="loader"/>
        <v-img :src="getImage(person)" :lazy-src="getImage(person)" height="300px"/>
        <div class="title-text">
          <h1>{{person.first_name}} {{person.last_name}}</h1>
        </div>
      </v-card>
    </template>

    <v-card width="100%" color="blue lighten-3" @click="modal = false">
      <v-progress-circular indeterminate size="100" class="loader"/>
      <v-img ref="largeImage" :src="getLargeImage(person)" height="90vh"/>
      <div class="title-text">
        <h1>{{person.first_name}} {{person.last_name}}</h1>
      </div>
      <v-btn flat icon large class="close-button">
        <v-icon>close</v-icon>
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Person } from '~/types'
import { Component, Prop, Vue, Inject, Provide } from 'nuxt-property-decorator'

@Component
export default class Card extends Vue {
  @Prop() person: Person
  @Provide() modal = false

  getImage(person: Person, size = 300) {
    size = size || 300
    const query = {
      set: 'set4',
      bgset: 'bg2',
      size: `${size}x${size}`,
    }
    let url = 'https://robohash.org/'
    url += `${person.first_name}_${person.last_name}`
    url += '?'
    url += Object.entries(query)
      .map((x) => x.join('='))
      .join('&')
    return encodeURI(url)
  }

  getLargeImage(person: Person) {
    if (this.$isServer) return this.getImage(person)
    const width = Math.ceil(window.innerWidth * 0.5)
    const height = Math.ceil(window.innerHeight * 0.9)
    return this.getImage(person, Math.max(width, height))
  }
}
</script>

<style lang="stylus" scoped>
.loader {
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 25px);
  color: rgba(#000, 0.4);
}

.title-text {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  background: rgba(#fff, 0.25);

  h1 {
    font-weight: 300;
    text-align: center;
    font-size: 18px;
  }
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
