<template>
<v-container fluid grid-list-md>
  <v-layout wrap>
    <v-flex md12 class="ma-7">
      <v-row>
        <h1 class="form-title">{{title}}</h1>
      </v-row>
      <v-row>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="user.first_name" :rules="firstNameRules" label="First name" required></v-text-field>
          <v-text-field v-model="user.last_name" :rules="lastNameRules" label="Last name" required></v-text-field>
          <v-text-field v-model="user.username" :counter="15" :rules="usernameRules" label="Username" required></v-text-field>
          <v-text-field v-model="user.email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-text-field v-model="user.password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :rules="passwordRules"
            :type="showPassword ? 'text' : 'password'" label="Password" counter
            @click:append="showPassword = !showPassword"></v-text-field>
          <v-text-field v-model="user.repeat_password" :append-icon="showRepeatPassword ? 'mdi-eye' : 'mdi-eye-off'" :rules="repeatPasswordRules"
            :type="showRepeatPassword ? 'text' : 'password'" label="Repeat Password" counter
            @click:append="showRepeatPassword = !showRepeatPassword"></v-text-field>
          <v-text-field v-model="user.twitter_screen_name" label="Twitter username"></v-text-field>
          <!-- <v-text-field v-model="user.instagram_screen_name" label="Instagram username"></v-text-field> -->

          <v-checkbox v-model="agreeTerms" :rules="[v => !!v || 'You must agree to continue!']" label="Agree to the Terms of Service and Privacy Policy, including Cookie Use." required ></v-checkbox>

          <v-btn color="primary" class="mr-4" @click="signUp"> Sign Up </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Clear Form </v-btn>
        </v-form>
      </v-row>
      <v-row class="mt-8">
        <v-alert v-model="alert" dense dismissible outlined type="error">User signing up error</v-alert>
      </v-row>
      <v-row class="pt-2">
        <hr style="width:75%" size="3" color=black>
      </v-row>
      <v-row class="pt-3">
        <p>Have an account?&nbsp;&nbsp;&nbsp;</p>
        <router-link to="/login">Login</router-link>
      </v-row>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import AuthDataService from '../../services/AuthDataService'

export default {
  name: 'SignUpForm',
  data () {
    return {
      title: 'Sign Up',
      user: {},
      valid: true,
      firstNameRules: [
        v => !!v || 'First name is required'
      ],
      lastNameRules: [
        v => !!v || 'Last name is required'
      ],
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length <= 15) || 'Username must be less than 15 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be longer than 8 characters',
      ],
      repeatPasswordRules: [
        v => !!v || 'Repeat password is required',
        v => v === this.user.password || 'Passwords must match'
      ],
      agreeTerms: false,
      showPassword: false,
      showRepeatPassword: false,
      alert: false
    }
  },
  methods: {
    signUp () {
      if (this.$refs.form.validate()) {
        this.user.instagram_screen_name = null
        AuthDataService.register(this.user).then(
          response => {
            console.log('Usuario registrado: ', response.data)
            this.$router.push('login')
          },
          error => {
            console.log('Error en el registro de usuario')
            this.alert = true
            console.log((error.response && error.response.data) ||
              error.message ||
              error.toString())
          }
        )
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>
</style>
