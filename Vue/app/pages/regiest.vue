<template>
  <div>
    <p>{{pageText}}</p>
    <form v-on:submit.prevent="submit">
      <input type="text" placeholder="输入你的昵称" v-model="form.name">
      <input type="email" placeholder="输入你的邮箱" v-model="form.email">
      <input type="password" placeholder="输入你的密码" v-model="form.password">
      <button type="submit">注册</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      pageText: 'Regiest Page',
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['regiest']),
    submit() {
      let arg = 'name=' + this.form.name + '&email=' + this.form.email + '&password=' + this.form.password
      this.regiest(arg)
    }
  }
}