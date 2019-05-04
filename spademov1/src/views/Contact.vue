<template>
    <div>
        <h1>I am Contact Component</h1>
        <button @click="loadResAddress">Res Address</button>
        <button @click="loadOfficeAddress">Office Address</button>
        {{resaddress}}
        {{officeaddress}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                resaddress:'',
                officeaddress:''
            }
        },
        methods:{
            loadResAddress(){
                    this.resaddress = 'Delhi-7';
            },
            loadOfficeAddress(){
                this.officeaddress = 'Noida Sec 10'
            }
        }
        
    }
</script>

<style  >
h1{
    color:red;
}
</style>