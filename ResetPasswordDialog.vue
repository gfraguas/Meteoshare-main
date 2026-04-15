<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card v-if="firstStep">
        <v-card-title class="text-h5 grey lighten-2">Request Reset Password</v-card-title>

        <v-card-text>
          <v-form ref="form" class="mt-6" v-model="valid" lazy-validation>
            <v-text-field v-model="username" :rules="usernameRules" label="Username" required></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="Email" required></v-text-field>
          </v-form>
          <v-row class="mt-1">
            <v-alert v-model="alert" dense dismissible outlined type="error">Password reset could not be requested</v-alert>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="requestResetPassword">Request</v-btn>
        </v-card-actions>
      </v-card>

      <v-card v-else>
        <v-card-title class="text-h5 grey lighten-2">Reset Password</v-card-title>

        <v-card-text>
          <v-form ref="form2" v-model="valid2" lazy-validation>
            <v-text-field v-model="password" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" :rules="passwordRules"
              :type="showPassword ? 'text' : 'password'" label="Password" counter
              @click:append="showPassword = !showPassword"></v-text-field>
            <v-text-field v-model="repeat_password" :append-icon="showRepeatPassword ? 'mdi-eye' : 'mdi-eye-off'" :rules="repeatPasswordRules"
              :type="showRepeatPassword ? 'text' : 'password'" label="Repeat Password" counter
              @click:append="showRepeatPassword = !showRepeatPassword"></v-text-field>
          </v-form>
          <v-row class="mt-1">
            <v-alert v-model="alert2" dense dismissible outlined type="error">Password reset could not be completed</v-alert>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="resetPassword">Reset password</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AuthDataService from '../../services/AuthDataService';

export default {
  name: 'ResetPasswordDialog',
  data () {
    return {
      dialog: false,
      valid: true,
      valid2: true,
      username: null,
      email: null,
      password: null,
      repeat_password: null,
      usernameRules: [
        v => !!v || 'Username is required',
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
        v => v === this.password || 'Passwords must match'
      ],
      showPassword: false,
      showRepeatPassword: false,
      alert: false,
      alert2: false,
      firstStep: true,
      userToRequestPassword: {}
    }
  },
  components: {
  },
  watch: {
    dialog () {
      if (!this.dialog) {
        this.firstStep = true
        this.username = null
        this.email = null
      }
    }
  },
  methods: {
    requestResetPassword () {
      console.log('requestResetPassword')
      if (this.$refs.form.validate()) {
        AuthDataService.findByRequestPasswordForm(this.username, this.email).then(
          response => {
            console.log('User: ', response.data)
            this.userToRequestPassword = response.data
            this.firstStep = false
          },
          error => {
            console.log('Error en la petición de reseteo de contraseña')
            this.alert = true
            console.log((error.response && error.response.data) ||
              error.message ||
              error.toString())
          }
        );
      }
    },
    resetPassword () {
      console.log('resetPassword: ', this.userToRequestPassword)
      if (this.$refs.form2.validate()) {
        AuthDataService.resetPassword(this.userToRequestPassword.password_token, this.password).then(
          response => {
            console.log('Reset de contraseña: ', response.data)
            this.dialog = false
            this.username = null
            this.email = null
          },
          error => {
            console.log('Error en el reseteo de contraseña')
            this.alert2 = true
            console.log((error.response && error.response.data) ||
              error.message ||
              error.toString())
          }
        );
      }

    }
  }
}
</script>
