<template>
<v-container fluid grid-list-md>
  <reset-password-dialog ref="reset-password-dialog"/>
  <v-layout wrap>
    <v-flex md12 class="ma-7">
      <v-row>
        <h1 class="form-title">{{title}}</h1>
      </v-row>
      <v-row>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="username" :rules="usernameRules" label="Username" required></v-text-field>
          <v-text-field v-model="password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :rules="passwordRules"
            :type="showPassword ? 'text' : 'password'" label="Password"
            @click:append="showPassword = !showPassword"></v-text-field>

          <v-btn color="primary" class="mr-4" @click="login"> Login </v-btn>
          <v-btn color="secondary" class="mr-4" text small @click="resetPwd">Forgot your password?</v-btn>
        </v-form>
      </v-row>
      <v-row class="mt-8">
        <v-alert v-model="alert" dense dismissible outlined type="error">Incorrect username or password</v-alert>
      </v-row>
      <v-row class="pt-2">
        <hr style="width:75%" size="3" color=black>
      </v-row>
      <v-row class="pt-3">
        <p>Don't have an account?&nbsp;&nbsp;&nbsp;</p>
        <router-link to="/signup">Sign up</router-link>
      </v-row>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import AuthDataService from '../../services/AuthDataService'

import ResetPasswordDialog from '@/components/Site/ResetPasswordDialog.vue'

export default {
  name: 'LoginForm',
  data () {
    return {
      title: 'Login',
      valid: true,
      username: null,
      password: null,
      usernameRules: [
        v => !!v || 'Username is required',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      showPassword: false,
      alert: false
    }
  },
  components: {
    ResetPasswordDialog
  },
  methods: {
    login () {
      if (this.$refs.form.validate()) {
        AuthDataService.login(this.username, this.password).then(
          response => {
            console.log('Inicio de sesión: ', response)
            if (response.data.accessToken) {
              this.$store.state.auth.status.loggedIn = true
              this.$store.state.auth.user = response.data
              localStorage.setItem('user', JSON.stringify(response.data))
              this.$router.push('home')
            }
          },
          error => {
            console.log('Error en el inicio de sesión')
            this.alert = true
            console.log((error.response && error.response.data) ||
              error.message ||
              error.toString())
          }
        );
      }
    },
    resetPwd () {
      this.$refs['reset-password-dialog'].dialog = true
    }
  }
}
</script>

<style scoped>
</style>
