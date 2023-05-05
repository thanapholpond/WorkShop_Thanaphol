
<template>
  <div class="hello">
    <h2>Project / ผลงานที่เคยทำ</h2>
    <br/><br/>
    <h2>สร้างเว็บไซต์เเนะนำสถานที่ท่องเที่ยวในจังหหวัดปทุมธานี</h2>
    <br/><br/>
    <v-col cols="12">
            <img
               src="../assets/loca.jpg"
               class="my-3"
               contain
               height="200"
            />
         </v-col>
         <v-col cols="12">
            <img
               src="../assets/cak.jpg"
               class="my-3"
               contain
               height="200"
            />
         </v-col>
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
