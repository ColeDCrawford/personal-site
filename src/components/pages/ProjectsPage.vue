<template>
    <div class="tile is-ancestor" id="projects">
        <show-project
            v-for="project in featuredProjects"
            :key="project.slug"
            :slug="project.slug"
            :style="style"
        ></show-project>
    </div>
</template>
<script>
    import ShowProject from '@/components/ShowProject.vue';
    export default {
        name: 'projects',
        components: {
            'show-project': ShowProject,
        },
        props: {
            'limit': {
                default: -1
            },
            'style': {
                default: 'card',
            }
        },
        data: function(){
            return {};
        },
        computed: {
            projects(){
                return this.$store.state.projects.slice(0, this.limit);
            },
            featuredProjects(){
                return this.$store.getters.getFeaturedProjects();
            }
        }
    }
</script>