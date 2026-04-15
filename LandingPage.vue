<template>
<v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex md12 class="ma-7">
        <v-row>
          <v-col cols="6">
            <v-img class="mx-2" :src="require('@/assets/Meteoshare.png')" max-height="300" max-width="300"/>
          </v-col>
          <v-col cols="6">
            <v-btn class="entrar-btn" @click="enterPage()">Entrar</v-btn>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  beforeCreate () {
    if (this.$store.state.auth.status.loggedIn) { this.$router.push('home') }
  },
  methods: {
    enterPage () {
      this.$router.push('/login')
    }
  }
}
</script>
