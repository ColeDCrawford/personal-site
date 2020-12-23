<template>
    <section class="hero is-medium is-primary is-bold project">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Projects

                        <div id="project-page">
        {{ slug }}
        <show-project
            :slug="slug">
        </show-project>
    </div>

    
                </h1>
            </div>
        </div>
    </section>
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