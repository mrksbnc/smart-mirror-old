<template>
  <div id="traffic-main">
    <div id="from-to-div">
      <div id="origin">
        <MapMarker id="icon" />
        <span>{{ origin }}</span>
      </div>
      <div id="destination">
        <MapMarker id="icon"/>
        <span>{{ destination }}</span>
      </div>
    </div>
    <div id="car">
      <Car id="icon"/>
      <span>{{ travelTimeByCar }}</span>
    </div>
    <div id="transit">
      <Bus id="icon"/>
      <span>{{ travelTimeByTransit }}</span>
    </div>
  </div>
</template>

<script>
import { traffic } from '@/config/config'
import Bus from 'vue-material-design-icons/Bus.vue'
import Car from 'vue-material-design-icons/Car.vue'
import MapMarker from 'vue-material-design-icons/MapMarker.vue'
export default {
  name: 'traffic',

  components: {
    Bus,
    Car,
    MapMarker
  },

  data () {
    return {
    }
  },

  computed: {
    origin () {
      return traffic.location.originAlias !== '' ? traffic.location.originAlias : traffic.location.origin
    },
    destination () {
      return traffic.location.destinationAlias !== '' ? traffic.location.destinationAlias : traffic.location.destination
    },
    travelTimeByCar () {
      return this.$store.state.traffic.carData.text
    },
    travelTimeByTransit () {
      return this.$store.state.traffic.transitData.text
    }
  }
}
</script>

<style scoped>
#traffic-main{
  display: flex;
  font-size: 0.9rem;
  margin-top: 20px;
  flex-direction: column;
}

#from-to-div{
  display: flex;
  flex-direction: row;
}

#origin {
  display: flex;
  align-items: center;
}

#destination{
  display: flex;
  margin-left: 10px;
  align-items: center;
}

#car{
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
}

#icon{
  padding-right: 5px;
}

#transit{
  display: flex;
  align-items: center;
}
</style>