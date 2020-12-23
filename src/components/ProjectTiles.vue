<template>
    <div class="tile is-ancestor" id="projects">
        <div class="tile is-vertical is-8">
            <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-primary">
                        <!-- SMALL CONTENT -->
                        <show-project
                            :slug="featuredProjects[0].slug"
                            :style="tile"
                        ></show-project>
                    </article>
                    <article class="tile is child notification is-warning">
                        <!-- SMALL CONTENT -->
                        <show-project
                            :slug="featuredProjects[1].slug"
                            :style="tile"
                        ></show-project>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-info">
                        <!-- MEDIUM CONTENT -->
                        <show-project
                            :slug="featuredProjects[2].slug"
                            :style="tile"
                        ></show-project>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-danger">
                    <!-- BIG CONTENT -->
                    <show-project
                            :slug="featuredProjects[3].slug"
                            :style="tile"
                        ></show-project>
                </article>
            </div>
        </div>
    <div class="tile is-parent">
        <article class="tile is-child notification is-success">
            <!-- TALL CONTENT -->
            <show-project
                :slug="featuredProjects[4].slug"
                :style="tile"
            ></show-project>
        </article>
    </div>
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
            'individual': {
                default: false,
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