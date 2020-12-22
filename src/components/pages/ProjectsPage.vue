<template>
    <div id="projects">
        <h1>Projects</h1>
        <router-link
            v-for="project in projects"
            :key="project.slug"
            :to="'/project/' + project.slug"
            exact
        >
            <show-project
                :slug="project.slug"
            ></show-project>
        </router-link>
    </div>
</template>
<script>
    import ShowProject from '@/components/ShowProject.vue';
    export default {
        name: 'projects',
        components: {
            'show-project': ShowProject,
        },
        props: [],
        data: function(){
            return {};
        },
        computed: {
            projects(){
                return this.$store.state.projects;
            }
        }
    }
</script>