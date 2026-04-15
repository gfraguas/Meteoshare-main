<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex md12 class="ma-7">
        <v-row>
          <v-col cols="6">
            <v-img class="mx-2" :src="require('@/assets/Meteoshare.png')" max-height="300" max-width="300"/>
          </v-col>
          <v-col cols="6">
            <login-form/>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginForm from '@/components/Site/LoginForm.vue'

export default {
  name: 'Login',
  data () {
    return {
    }
  },
  beforeCreate () {
    if (this.$store.state.auth.status.loggedIn) { this.$router.push('home') }
  },
  components: {
    LoginForm
  },
  methods: {
  }
}
</script>

<style scoped>
#logo {
  width: 60%;
}
</style>
