<!--
 * @Author: hanxu03
 * @Date: 2021-11-10 21:02:21
 * @LastEditTime: 2021-11-15 16:02:33
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<template>
  <div id="nav">
    <router-link to="/reactiveDemo">reactiveDemo</router-link> |
    <router-link to="/toRefsDemo">toRefsDemo</router-link> |    
    <router-link to="/lifeCycle">lifeCycle</router-link> |
    <router-link to="/watchReactive">watchReactive</router-link> |
    <router-link to="/watchReactiveDeep">watchReactiveDeep</router-link> |
    <router-link to="/suspenseDemo">suspense</router-link> |
    <router-link to="/hookTest">hookTest</router-link> |
    <router-link to="/teleport">teleport</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
