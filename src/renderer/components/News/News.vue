<template>
  <div id="news-main-div">
    <div id="news-element-div" v-for="(item, index) in news" :key="index">
        <div id="icon-box">
          <NewspaperVariantMultiple />
          <span>
          {{item.title.split('-')[1]}} -
        </span>
        <span>
          {{item.title.split('-')[0]}}
        </span>
        </div>
    </div>
  </div>
</template>

<script>
import NewspaperVariantMultiple from 'vue-material-design-icons/NewspaperVariantMultiple.vue'
export default {
  name: 'news',

  components: {
    NewspaperVariantMultiple
  },

  computed: {
    news: function () {
      return this.$store.state.news.news
    }
  }
}
</script>

<style>
#icon-box{
  display: flex;
  align-items: center;
}
</style>