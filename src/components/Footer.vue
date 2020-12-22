<template>
  <footer class="sticky-footer border-top border-light-gray gray h6">
    <div class="sm-col px2">©{{ this.year }} Cole Crawford</div>
    <div class="sm-col-right px2">
      <a href="https://github.com/ColeDCrawford" target="_blank" class="gray hint--top" data-hint="GitHub">
        <font-awesome-icon :icon="['fab','github-square']" />
      </a>
      <a href="https://twitter.com/runcolerun" target="_blank" class="gray hint--top" data-hint="Twitter">
        <font-awesome-icon :icon="['fab','twitter-square']" />
      </a>
      <a href="https://www.linkedin.com/in/coledcrawford/" target="_blank" class="gray hint--top" data-hint="LinkedIn">
        <font-awesome-icon :icon="['fab','linkedin']" />
      </a>
      <a href="mailto:cole_crawford@fas.harvard.edu" target="_blank" class="gray hint--top" data-hint="Email">
        <font-awesome-icon :icon="['fa','envelope-square']" />
      </a>
     
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  components: {},
  // data() {},
  mounted() {},
  computed: {
    year(){
        let d = new Date();
        return d.getFullYear();
    }
  },
  methods: {},
};
</script>