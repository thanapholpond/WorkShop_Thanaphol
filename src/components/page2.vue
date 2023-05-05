<template>
  <div class="hello">
    <v-col cols="12">
            <img
               src="../assets/pond.jpg"
               class="my-3"
               contain
               height="200"
            />
         </v-col>
         
    <h2>Facebook : Thanaphol Kettabtim</h2>
    <h2><a href="https://www.facebook.com/khong.six.1" target="_blank">Facebook</a></h2>
    <h2>Email : kettabtimpond@gmail.com</h2>
    <h2>เบอร์โทร : 06-2008-6335 </h2>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
