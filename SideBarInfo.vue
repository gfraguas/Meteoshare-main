<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex md12 class="ma-7">
        <v-row>
          <v-col md="1" offset-md="11" class="pa-0 pl-2 pt-1">
            <v-btn color="accent" fab rounded small @click="closeSidebar"><font-awesome-icon icon="times"/></v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" offset-md="0" class="pa-0 pl-2">
            <h2 class="city-title">Salamanca</h2>
          </v-col>
        </v-row>
        <v-row class="pb-1">
          <v-col cols="8" class="pa-0 pl-2 pt-1">
            <p class="general-info">{{pais}} / Latitud: {{latitud}} / Longitud: {{longitud}} / Altitud: {{altitud}} m</p>
            <p class="general-info">Zona horaria: {{zona_horaria}} / Hora actual: {{hora_actual}}</p>
          </v-col>
          <v-col cols="4" class="pa-0 pl-2 pt-1">
            <v-btn color="primary"><font-awesome-icon icon="plus"/>&nbsp;Añadir Comentario</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12" offset-md="0" class="pa-0 px-1 pt-2">
            <hr class="hr-class">
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4" class="pa-0 pt-2 pb-1">
            <p class="highlighted-info">{{temperatura}} ºC</p>
          </v-col>
          <v-col cols="4" class="pa-0 pt-2 pb-1">
            <p class="highlighted-info">Viento {{viento}} km/h</p>
          </v-col>
          <v-col cols="4" class="pa-0 pt-2 pb-1">
            <p class="highlighted-info">Humedad {{humedad}} %</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12" offset-md="0" class="pa-0 px-1 pt-2">
            <hr class="hr-class">
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" offset-md="0" class="pt-4 pl-2">
            <h3 class="comments-title">Comentarios</h3>
          </v-col>
        </v-row>

        <v-row v-for="(comment, index) of comments" :key="index" class="pt-2 pb-2">
          <v-row class="row-comment">
            <v-col cols="3" class="pa-0 pl-2 pr-2 image-col">
              <div class="div-img">
                <img class="img-shape" src='@/assets/sinimagen.png'/>
              </div>
            </v-col>
            <v-col cols="8" class="mr-1 pb-8">
              <v-row>
                <h4 class="user-name mb-1"><font-awesome-icon icon="circle-user"/>&nbsp; &nbsp;{{comment.user}}</h4>
                <p class="text-info">{{comment.text}}</p>
              </v-row>
              <v-row>
                <v-col cols="2 pa-0 ma-0 ml-2 mt-1">
                  <p class="like-comment"><font-awesome-icon icon="thumbs-up"/> &nbsp;{{comment.likes}}</p>
                </v-col>
                <v-col cols="2 pa-0 ma-0 mt-1">
                  <p class="dislike-comment"><font-awesome-icon icon="thumbs-down"/> &nbsp;{{comment.dislikes}}</p>
                </v-col>
                <v-col class="pa-0 ma-0 mt-1">
                  <v-btn color="primary" outlined x-small>Responder</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <hr class="hr-comment-class">
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "SideBarInfoComponent",
  components: {
  },
  data: () => ({
    pais: 'Spain',
    latitud: '40º57\'N',
    longitud: '5º39\'W',
    altitud: '812',
    zona_horaria: 'Europe/Madrid (UTC+2)',
    hora_actual: '13:58 10/05/2022',
    temperatura: 25,
    viento: 15,
    humedad: 30,
    comments: [
      {
        user: 'Nombre usuario',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse...Lorem ipsum dolor sit amet...',
        likes: 20,
        dislikes: 5
      },
      {
        user: 'Nombre usuario',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse...',
        likes: 10,
        dislikes: 0
      },
      {
        user: 'Nombre usuario',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse...Lorem ipsum dolor sit amet...',
        likes: 8,
        dislikes: 2
      },
      {
        user: 'Nombre usuario',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse...',
        likes: 15,
        dislikes: 1
      }
    ],
    location: {}
  }),
  watch: {
    location () {
      console.log('wath de location en el sidebar: ', this.location)
    }
  },
  mounted() {
  },
  methods: {
    closeSidebar () {
      this.$emit('sidebarClose')
    }
  }
};
</script>

<style scoped>
.city-title {
  color: #0065e9;
  padding: 0 !important;
}

.general-info {
  font-size: 12px;
  margin: 0 !important;
  color: #052b5d;
}

.text-info {
  font-size: 12px;
  margin: 0 !important;
  color: #052b5d;
  min-height: 50px;
}

.highlighted-info {
  font-size: 21px;
  margin: 0 !important;
  font-weight: bolder;
  text-align: center;
  color: #052b5d;
}

.comments-title {
  color: #072d5f;
  padding: 0 !important;
}

.div-img {
  height: 100px;
  align-items: center;
  display: flex;
  justify-content: center;
}

.img-shape {
  height: 100%;
  margin: 0 auto;
}

.row-comment {
  height: 10%;
}

.image-col {
  text-align: center;
}

.user-name {
  font-size: 18px;
  font-weight: bold;
  color: #052b5d;
}

.like-comment {
  color: #21cdf3;
}

.dislike-comment {
  color: red;
}

.hr-class {
  border-color: #052b5d;
  background-color: #052b5d;
  height: 1px;
}

.hr-comment-class {
  width: 80%;
}

</style>
