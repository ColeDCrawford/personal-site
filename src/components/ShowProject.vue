<template>
    <!-- individual project style -->
    <div class="project" v-if="style == 'individual'">
        <section class="hero is-medium is-info is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1">
                        {{ this.project.title }}
                    </h1>
                </div>
            </div>
        </section>
        <div class="content">{{ this.project.content }}</div>
        <ul class="links">
            <li v-for="link in this.project.metadata.links" :key="link">
                {{ link }}
            </li>
        </ul>
        <div class="dates">{{this.project.metadata.start_date}} to 
            <span v-if="this.project.metadata.end_date">{{this.project.metadata.end_date}}</span>
            <span v-else>Now</span>
        </div>
        <div class="context">
            <div v-for="context in this.project.metadata.context" :key="context">
                {{ context }}
            </div>
        </div>
        <div class="technologies">
            <show-tech v-for="tech in this.project.metadata.technologies" :key="tech" :tech="tech"></show-tech>
        </div>
        <div class="roles">
            <show-role v-for="role in this.project.metadata.roles" :key="role" :role="role"></show-role>
        </div>
    </div>

    <!-- Card project style -->
    <div v-else-if="style='tile'">
        <h2 class="title">{{ this.project.title }}</h2>
        <div class="content">{{ this.project.content }} </div>
        <div class="technologies">
            <show-tech v-for="tech in this.project.metadata.technologies" :key="tech" :tech="tech" :size="'is-48x48'"></show-tech>
        </div>
    </div>
    

    <!-- -->
    <div v-else>
        <h2 class="title"></h2>
        <figure class="image is-4by3">
            <img>
        </figure>
        <div class="content">
            {{ this.project.content }}
        </div>
        <div class="technologies">

        </div>
    </div>
</template>
<script>
    import ShowRole from '@/components/ShowRole.vue';
    import ShowTech from '@/components/ShowTech.vue';
    export default{
        name: 'project',
        components: {
            'show-role': ShowRole,
            'show-tech': ShowTech
        },
        props: [
            'slug',
            'style'
        ],
        computed: {
            project(){
                return this.$store.getters.getProjectBySlug(this.slug);
            }
        }
    }
</script>
<style>

</style>