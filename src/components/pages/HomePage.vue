<template>
    <div class="bd-container">
        <section class="hero is-medium is-info is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Cole Crawford
                    </h1>
                    <h2 class="subtitle">
                        Digital humanities jack of all trades
                    </h2>
                </div>
            </div>
        </section>
        <div class="bd-container container">
            <project-tiles></project-tiles>
        </div>
    </div>

</template>
<script>
    import ProjectTiles from '@/components/ProjectTiles.vue'
    export default {
        name: 'homepage',
        props: [],
        components: {
            'project-tiles': ProjectTiles
        },
        computed: {},
    }
</script>
<style>

</style>