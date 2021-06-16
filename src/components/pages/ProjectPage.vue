<template>
    <section class="hero is-medium is-primary is-bold project">
        <div class="hero-body">
            <div class="container">
                <div id="project-page">
                    <show-project
                        :slug="slug"
                        displayType="individual">
                    </show-project>
                </div>
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