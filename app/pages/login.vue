<template>
  <div>
    <p>{{pageText}}</p>
    <form v-on:submit.prevent="submit">
      <input type="email" placeholder="输入你的邮箱" v-model="form.email">
      <input type="password" placeholder="输入你的密码" v-model="form.password">
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
  methods: {
    ...mapActions(['login']),
    submit() {
      let arg = 'email=' + this.form.email + '&password=' + this.form.password
      this.login(arg)
    }
  }
}
</script>