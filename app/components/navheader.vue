<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">EDUBOOK</router-link>
        <a class="navbar-toggle glyphicon glyphicon-th-list" data-toggle="collapse" data-target="#NavbarCollapse"/>
      </div>
      <div class="navbar-collapse collapse" id="NavbarCollapse">
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="login">登陆</router-link></li>
          <li><router-link to="regist">注册</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style lang="sass">

</style>