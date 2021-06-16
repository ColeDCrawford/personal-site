<template>
  <div id="app">
    <Header></Header>

    <div class="bd-main">
      <router-view></router-view>
    </div>
  
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
export default {
  name: "App",
  components: {
    'Footer': Footer,
    'Header': Header
  },
  // data() {},
  mounted() {
    console.log(process.env.NODE_ENV);
    console.log(process.env.VUE_APP_API_URL);
    this.$store.dispatch("fetchProjects");
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
