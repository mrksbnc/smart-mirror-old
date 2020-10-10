<template>
  <div id="main-datetime-div">
    <span id="date-span">{{ date }}</span>
    <span id="time-span">{{ time }}</span>
  </div>
</template>

<script>
import { DateTimeService } from '@/services'
export default {
  name: 'datetime',
  data () {
    return {
      time: null,
      date: null
    }
  },

  created () {
    setInterval(() => {
      this.setDate()
      this.setTime()
    }, 1000)
  },

  methods: {
    setDate () {
      this.date = DateTimeService.getCurrentDate()
    },
    setTime () {
      this.time = DateTimeService.getCurrentTime()
    }
  }
}
</script>

<style  scoped>
#main-datetime-div{
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
}
#date-span{
    font-size: 1.25rem;
    color: #ffffff;
}
#time-span{
    font-size: 7rem;
    color: #ffffff;
}
</style>
