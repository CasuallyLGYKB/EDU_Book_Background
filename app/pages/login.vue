<template>
  <div>
    <navheader></navheader>
    <p>{{pageText}}</p>
    <form v-on:submit.prevent="submit">
      <div class="input-group">
        <span class="input-group-addon">@</span>
        <input class="form-control" type="email" placeholder="输入你的邮箱" v-model="form.email">
      </div>
       <div class="input-group">
        <span class="input-group-addon">@</span>
        <input class="form-control" type="password" placeholder="输入你的密码" v-model="form.password">
      </div>
      <button type="submit" class="btn btn-default">登录</button>
    </form>
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
form {
  input {
    display: block;
    border-radius: 2px;
  }
}
</style>