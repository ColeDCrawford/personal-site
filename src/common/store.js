import Vue from 'vue'
import Vuex from 'vuex'
import { axios } from '@/common/app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        projects: []
    },
    mutations: {
        setProjects(state, payload){
            state.projects = payload;
        }
    },
    actions: {
        fetchProjects(context) {
            let config = {
                params: {
                    type: 'projects',
                    props: 'slug,title,content,metadata',
                }
            }
            axios.get('/objects', config).then((response) => {
                console.log("hee");
                console.log(response);
                context.commit('setProjects', response.data.objects)
            })
        }
    },
    getters: {
        getProjectBySlug(state){
            return function(slug) {
                console.log('getProjectBySlug ', slug)
                return state.projects.filter((project) => {
                    return project.slug == slug;
                }, this.slug)[0];
            }
        },
        getFeaturedProjects(state){
            return function(){
                return state.projects.filter((project) => {
                    return project.metadata.featured == true;
                }, this.slug);
            }
        }
    }
})