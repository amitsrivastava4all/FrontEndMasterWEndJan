<template>
  <div>
 <hr>
    Vuex
    <input v-model="first" type="text" placeholder="Type First Number">
    <input v-model="second" type="text" placeholder="Type Second Number">
    <button @click="add">Add</button>
    <h5>Result is {{$store.state.calc}}</h5>
    <h5>Result is {{$store.state.calc.result}}</h5>
    <hr>
    <Result/>

    <h1>Axios Demo</h1>
    <button @click="callServer">Call Server</button>
    <h1>{{msg}}</h1>
    <h2>{{obj}}</h2>
    <!-- <h3>Server Data is {{serverdata}}</h3> -->
    <ul>
      <li v-for="mobile in serverdata" :key="mobile.id">
          {{mobile.id}} {{mobile.name}} {{mobile.price}}
          <img :src="mobile.url">
      </li>
    </ul>
   
  </div>
</template>

<script>
import axios from 'axios';
import Result from './components/Result.vue';
  export default {
    components:{Result},
    beforeCreate() {
    console.log('Nothing gets called before me!')
  },
  /*created() {
   
  },*/
    data(){
      console.log("Data Call");
      return {
        first:0,
        second:0,
        serverdata:null,
        error:null,
        msg :'',
        obj:{
          x:1000,
          y:2000
        }
      }
    },
      methods:{
        add(){
          this.$store.commit('ADD',{firstNumber:this.first, secondNumber: this.second});
        },
        callServer(){
          this.msg = 'Calling Server';
          axios.get('https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json').then(data=>{
            console.log('Data is ',data);
              this.serverdata = data['data']['mobiles'];
          }).catch(err=>{
            console.log('Error is ',err);
            this.error = err;
          })
        }
      }
  }
</script>

<style lang="scss" scoped>

</style>