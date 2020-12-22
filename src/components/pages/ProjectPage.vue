<template>
    <div id="project-page">
        {{ slug }}
        <show-project
            :slug="slug">
        </show-project>
    </div>
</template>
<script>
    import ShowProject from '@/components/ShowProject.vue';
    export default {
        name: 'project-page',
        props: ['slug'],
        components: {
            'show-project': ShowProject
        },
        computed: {

        },

    }
</script>
<style>

</style>