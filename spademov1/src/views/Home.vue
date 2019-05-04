<template>
  <div>
       <mynav>this is home nav</mynav>
    <h1>I am Home Component</h1>
    <Header/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
  export default {
    components:{Header}
  }
</script>

<style scoped >
h1{
  color:green;
}
</style>