import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    calc:{
      firstNumber:0, secondNumber:0, result:0
    }
  },
  mutations: {
    ADD(state, payLoad){
      console.log("Add Mutation Called ",state, "  ",payLoad);
        state.calc.result = parseInt(payLoad.firstNumber) + parseInt(payLoad.secondNumber);
        state.calc.firstNumber = parseInt(payLoad.firstNumber);
        state.calc.secondNumber = parseInt(payLoad.secondNumber);

        console.log("State is ",this.state.calc);
      //return this.state;
      }
  },
  actions: {

  }
})
