<template>
    <div>
        <h1>test two</h1>
        <!-- router-link to Test1 component -->
        <router-link to="/Test1">To Test 1</router-link>
        <!-- 接收数据 -->
        <h3>Receive data：{{nid}}</h3>
    </div>
</template>
<script>
export default {
    data(){
        return{
            nid:""
        }
    },
    created(){
        this.nid=this.$route.query.nid;
    }
}
</script>
<style scoped>

</style>
