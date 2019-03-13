<template>
    <div>
        <h1>test one</h1>
        <h3>Use tag to Test2 component</h3>
        <router-link to="/Test2">Method One:Tag router-lin</router-link>
        <h3>Use process</h3>
        <img src="http://localhost:3000/img/news/1.png" @click="jump">
        <!-- jump to Home component -->
        <img src="http://localhost:3000/img/news/1.png" @click="jumpHome">
        <!-- jump to Newslist component -->
        <img src="http://localhost:3000/img/news/1.png" @click="jumpNews">
        <!-- 带参发送数据 -->
        <h1>发送数据Test1</h1>
        <router-link to="/Test2?nid=9">Send datas</router-link>
        <img src="http://localhost:3000/img/news/1.png" @click="jumpData">
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        jump(){
            this.$router.push("/Test2")
        },
        jumpHome(){
            this.$router.push("/Home")
        },
        jumpNews(){
            this.$router.push("/Newslist")
        },
        jumpData(){
            this.$router.push("/Test2?nid=10")
        }
    }
}
</script>
<style scoped>

</style>
