<template>
  <div>
    <navheader></navheader>
    <div class="page">
      <div class="container">
        <form v-on:submit.prevent="submit" class="col-lg-4 col-lg-offset-4">
          <div class="form-group">
            <label>邮箱</label>
            <input class="form-control" type="email" placeholder="输入你的邮箱" v-model="form.email">
          </div>
          <div class="form-group">
            <label>密码</label>
            <input class="form-control" type="password" placeholder="输入你的密码" v-model="form.password">
          </div>
          <button type="submit" class="btn btn-default">登录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import navheader from '../components/navheader.vue'
export default {
  data() {
    return {
      pageText: 'Login Page',
      form: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    navheader
  },
  methods: {
    ...mapActions(['login']),
    submit() {
      let arg = 'email=' + this.form.email + '&password=' + this.form.password
      this.login(arg)
    }
  }
}
</script>

<style lang="sass">

</style>