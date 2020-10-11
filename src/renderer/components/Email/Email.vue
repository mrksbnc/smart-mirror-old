<template>
  <div id="email-main-div">
    <div id="email-element-div" v-for="(item, index) in emails" :key="index">
        <div id="icon-box">
          <span v-if="item.type === 'email'">
            <Email id="icon"/>
          </span>
          <span v-else>
            <CheckCircle id="icon"/>
          </span>
          <span>
          {{item.from}}
        </span>
        &nbsp;
        -
        &nbsp;
        <span>
          {{item.subject}}
        </span>
        </div>
    </div>
  </div>
</template>

<script>
import Email from 'vue-material-design-icons/Email.vue'
import CheckCircle from 'vue-material-design-icons/CheckCircle.vue'
export default {
  name: 'email',

  components: {
    Email,
    CheckCircle
  },

  computed: {
    emails: function () {
      return this.$store.state.email.email
    }
  }
}
</script>

<style>
#icon-box{
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

#icon{
  padding-right: 10px;
}
</style>