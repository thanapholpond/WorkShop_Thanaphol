<template>  
  <div id="app">
    <template>   
    <v-button-navigation v-model="value">
      <v-btn value ="recent" @click="gotoHome()">
        <span>PROFILE</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn value ="recent" @click="gotoPage2()">
        <span>Contact</span>
        <v-icon> mdi-card-account-mail</v-icon>
      </v-btn>
       <v-btn value ="recent" @click="gotoPage3()">
        <span>Project</span>
        <v-icon> mdi-language-html5</v-icon>
      </v-btn>
    </v-button-navigation>
      <br/><br/>
      
 </template>
      <router-view />
    </div>
</template>

<script>
export default {
   name: 'App',
  methods: {
    gotoHome(){
      if(this.$route.path !== '/'){
        this.$router.push('/')
      }
    },
    gotoPage2(){
       if(this.$route.path !== '/page2'){
          this.$router.push('/page2')
      }
    },
    gotoPage3(){
       if(this.$route.path !== '/page3'){
          this.$router.push('/page3')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-exact-active {
  color: blue;
}
</style>