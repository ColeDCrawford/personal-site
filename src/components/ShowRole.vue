<template>
    <span class="tag is-light is-medium" :class="[tagClass]">
        {{ role }}
    </span>
</template>
<script>
    export default{
        name: 'show-role',
        props: ['role'],
        computed: {
            tagClass(){
                let c = '';
                switch(this.role){
                    case "Frontend / CMS dev":
                        c = "is-link";
                        break;
                    case "Consultant":
                        c = "is-success";
                        break;
                    case "QA / Testing":
                        c = "is-danger";
                        break;
                    case "Sys Admin / Dev Ops":
                        c = "is-info";
                        break;
                    case "Full Stack Dev":
                        c = "is-primary";
                        break;
                    case "Project Manager":
                        c = "is-warning";
                        break;
                }
                return c;
            }
        }
    }
</script>
<style>

</style>