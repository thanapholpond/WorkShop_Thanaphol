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
    <h2>ชื่อ : {{ text }}</h2>
    <h2>ชื่อเล่น : ปอนด์</h2>
    <h2>อายุ : 22 ปี </h2>
    <h2>ทักษะ : HTML </h2>
    <h2>งานอดิเรก : เล่นเกม </h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      text: "นายธนพล เกษทับทิม",
      
    };
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
