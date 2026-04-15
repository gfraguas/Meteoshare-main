<template>
  <v-app>
    <v-main>
      <v-container fluid grid-list-md>
        <v-layout wrap>
          <v-flex xs12 md12>
            <SideBarInfo v-if="!isClosed" :location="location" class="top-class-card" @sidebarClose="closeSidebar"/>
          </v-flex>
          <v-flex xs12 md12 class="bottom-class">
            <v-sheet>
              <div style="width:100%;height: 90vh;">
                <top-bar v-if="isClosed"/>
                <top-bar-2 v-else/>
                <Map v-model="location" :key="key" class="bottom-class"/>
                <div id="bottomBar">
                  <bottom-bar class="bottom-center-class-card"/>
                </div>
              </div>
            </v-sheet>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Map from '@/components/Maps/Map'
  import TopBar from '@/components/Bars/TopBar.vue'
  import TopBar2 from '@/components/Bars/TopBar2.vue'
  import BottomBar from '@/components/Bars/BottomBar.vue'
  import SideBarInfo from '@/components/Bars/SideBarInfo.vue'

export default {
  name: "ContainerMap",
  components: {
    Map,
    TopBar,
    TopBar2,
    BottomBar,
    SideBarInfo
  },
  data: () => ({
    dialog: false,
    location: {},
    key: 1,
    isClosed: true
  }),
  watch: {
    location () {
      if (this.location.position !== undefined) this.isClosed = false
    }
  },
  beforeCreate () {
    if (!this.$store.state.auth.status.loggedIn) { this.$router.push('/') }
  },
  mounted() {
  },
  methods: {
    closeSidebar () {
      this.location = {}
      this.isClosed = true
    }
  }
};
</script>

<style scoped>
  #bottomBar{
    align-items: center;
    display: flex;
    justify-content: center;
  }

.bottom-center-class-card {
    z-index: 2;
    position: absolute;
    bottom: 2vh;
    width: auto;
    height: auto;
    text-align: center;
  }
.map-shape {
  width: 100%;
  height: 96vh;
}

.bottom-class {
  z-index: 1;
}

.top-class-card {
  z-index: 2;
  position: absolute;
  background-color: white;
  right: 13px;
  width: 40%;
  height: 97vh;
  top: 2vh;
  padding: 0 !important;
}
</style>
