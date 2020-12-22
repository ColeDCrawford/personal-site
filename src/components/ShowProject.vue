<template>
    <div class="project">
        {{ this.project }}
        <h1>{{ this.project.title }}</h1>
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
        <ul class="technologies">
            <li v-for="tech in this.project.metadata.technologies" :key="tech">
                {{ tech }}
            </li>
        </ul>
        <ul class="roles">
            <li v-for="role in this.project.metadata.roles" :key="role">
                {{ role }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name: 'project',
        components: {},
        props: [
            'slug'
        ],
        computed: {
            project(){
                return this.$store.getters.getProjectBySlug(this.slug);
            }
        }
    }
</script>