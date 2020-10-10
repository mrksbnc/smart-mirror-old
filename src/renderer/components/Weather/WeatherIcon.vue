<template>
  <i class="wi" :class="[icon ? 'wi-' + icon : '']" />
</template>

<script>
import 'weathericons/css/weather-icons.css'
import 'weathericons/css/weather-icons-wind.css'

export default {
  name: 'weathericon',

  props: {
    icon: {
      required: true,
      type: String
    }
  }
}
</script>