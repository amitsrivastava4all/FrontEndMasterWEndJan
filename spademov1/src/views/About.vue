<template>
  <div class="about">
    <mynav>this is about nav</mynav>
    <!-- <h1>This is an about page Params are {{$route.params.name}} {{$route.params.city}}</h1> -->
  <h1>Props as Params {{name}} {{city}}</h1>
  </div>
</template>
<script>
export default{
  props:["name","city"]
}
</script>
