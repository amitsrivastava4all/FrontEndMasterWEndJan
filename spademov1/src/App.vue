<template>
  <div id="app">
    <input type="text" v-model="myname" placeholder="Type Name Here">
   Name is {{myname}}
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{name:'about',params:{name:myname,city:'Delhi'}}">About</router-link>|
       <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script> 
export default {
  data(){
    return {
      myname:''
    }
  }
} 
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
