<template>
  <v-container align-center>
    <v-row>
      <v-col  v-for="card in cardData" :key="card.date" col="12">
        <v-card class="rounded-card" max-width="110" max-height="250">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title id="date" class="h1">{{card.date}}</v-list-item-title>
                <v-img 
                  class="mx-auto"
                  :src="card.img"
                  max-height="60"
                  max-width="60"
                />
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row id="row">     
              <v-col id="col" align="center" class="mx-auto" v-if="card.tempMax != undefined" cols="6">
                <p id="temp">
                  <font-awesome-icon icon="fa-solid fa-arrow-up" />
                  {{card.tempMax}}&deg;C
                </p>
              </v-col>
            </v-row>
  
            <v-row align="center">                  
              <v-col id="col" align="center" class="mx-auto" v-if="card.tempMax != undefined" cols="6">
                <p id="temp">        
                  <font-awesome-icon icon="fa-solid fa-arrow-down" />
                  {{card.tempMin}}&deg;C
                </p>
              </v-col>
              <v-col v-else align="center" cols="12">N/A&deg;C</v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-card id="slider">
      <v-slider v-model="time" :loader-height="10" :max="8" :tick-labels="labels"  ticks/>
    </v-card>

  </v-container>
</template>

<script>
export default {
  name: 'BottomBar',
  data: () => ({
    labels: ["00:00", "02:00", "05:00", "08:00", "11:00", "14:00", "17:00", "20:00", "23:00"],
    time: 0,
    cardData:[ 
      {
        date:"Hoy", 
        temp:30,
        img:require('@/assets/cloud.png'), 
        tempMax:37, 
        tempMin:25

      }, 
          {
        date:"Jun 17", 
        temp:32,
        img:require('@/assets/sun.png'), 
        tempMax:undefined, 
        tempMin:25

      },
           {
        date:"Jun 18", 
        temp:32,
        img:require('@/assets/cloudy.png'), 
        tempMax:36, 
        tempMin:25

      },
           {
        date:"Jun 19", 
        temp:32,
        img:require('@/assets/cloudyRain.png'), 
        tempMax:36, 
        tempMin:25

      },
           {
        date:"Jun 20", 
        temp:32,
        img:require('@/assets/sun.png'), 
        tempMax:36, 
        tempMin:25

      },
           {
        date:"Jun 21", 
        temp:32,
        img:require('@/assets/sun.png'), 
        tempMax:36, 
        tempMin:25

      },
           {
        date:"Jun 22", 
        temp:32,
        img:require('@/assets/cloudy.png'), 
        tempMax:36, 
        tempMin:25

      },
           {
        date:"Jun 23", 
        temp:32,
        img:require('@/assets/sun.png'), 
        tempMax:36, 
        tempMin:25

      },
    ]
  }),
};
</script>


<style scoped>

  #date{
    margin-bottom: 5%;
  }
  #slider{
    background: rgba(255, 255, 255, 0.7);
    margin-top: 20px;
  }
  #row{
    margin-top: -23%;
    margin-bottom: -10%;
  }
  #col{
    padding:0%;
  }
  #temp{
    margin-bottom: 2%;
  }

</style>