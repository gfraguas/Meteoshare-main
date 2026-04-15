<template>
  <div>
    <v-app-bar>
      <v-img class="mx-2" :src="require('@/assets/Meteoshare.png')" max-height="300" max-width="300"/>
      <v-spacer></v-spacer>
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <v-text-field
        id="search-top-bar"
        hide-details
        prepend-icon="fa-solid fa-magnifying-glass"
        outlined
      />
      <font-awesome-icon id="userIcon" icon="fa-solid fa-circle-user" size="3x" />
      <v-btn icon id="outIcon" @click="logout">
        <font-awesome-icon  icon="fa-solid fa-right-from-bracket" size="2x" />
      </v-btn>
    </v-app-bar>
  </div>
</template>


<script>
export default {
  name: "TopBar",
  methods: {
    logout () {
      this.$store.state.auth.status.loggedIn = false
      this.$store.state.auth.user = null

      this.$store.dispatch('auth/logout')
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))

    }
  }
};
</script>

<style scoped>
  .v-text-field {
    margin-right: 2%;
  }

  #userIcon {
    margin-right: 1%;
  }

  #outIcon {
    margin-right: 2px;
  }
</style>
