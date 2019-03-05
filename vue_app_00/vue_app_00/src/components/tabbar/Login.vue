<template>
    <div class="app-login">
        <h1>Login component</h1>
        <form>
            User Name: <input type="text" name="uname" v-model="username"><br>
            Password: <input type="password" name="upwd" v-model="pword"><br>
            <input type="button" value="click" @click="submit">
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:"",
            pword:""
        }
    },
    methods:{
        submit(){
            // console.log(this.username,this.pword); 
            this.axios.get("http://localhost:3000/login",{
                params:{
                    name:this.username,
                    pwd:this.pword
                }
            }).then(result=>{
                alert(result)
            })
        }
    }
}
</script>
<style scoped> 

</style>

