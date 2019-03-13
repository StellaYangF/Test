<template>
  <div>
    <mt-header title="XZ mall"></mt-header>
    <mt-button>Click</mt-button>
    <h1>User list component</h1>
    <p>{{users}}</p>
    <ul id="tplList">
      <li v-for="user of users">ID:{{user.id}} NAME: {{user.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [      
        { id: 1, name: "tom" },      
        { id: 2, name: "linda" },
        { id: 3, name: "peter" }
      ]
    };
  }
};
</script>
<style scoped>
#tplList {
  list-style: none;
  font-weight: bold;
}
#tplList > li:nth-child(odd) {
  background: lightgreen;
  margin: 20px 0px;
}
</style>

