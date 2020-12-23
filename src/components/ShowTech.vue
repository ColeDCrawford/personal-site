<template>
    <figure class="image" :class="[size]">
        <img :src="imageSource">
    </figure>
</template>
<script>
    export default {
        name: 'show-tech',
        props: {
            'tech': {},
            'size': {
                'default': 'is-96x96'
            }
        },
        data() {
            return {
                mappings: {
                    "vue": {
                        "display": "Vue",
                        "file": "vue.png"
                    },
                    "react": {
                        "display": "React",
                        "file": "react.svg"
                    },
                    "php": {
                        "display": "PHP",
                        "file": "php.png"
                    },
                    "nodejs": {
                        "display": "nodeJS",
                        "file": "nodejs.png"
                    },
                    "flask": {
                        "display": "Flask",
                        "file": "flask.png"
                    },
                    "django": {
                        "display": "Django",
                        "file": "django.png"
                    },
                    "drupal": {
                        "display": "Drupal",
                        "file": "drupal.png",
                    },
                    "omeka": {
                        "display": "Omeka",
                        "file": "omeka.png"
                    },
                    "bootstrap": {
                        "display": "Bootstrap",
                        "file": "bootstrap.png"
                    },
                    "scalar": {
                        "display": "Scalar",
                        "file": "scalar.png"
                    },
                    "rails": {
                        "display": "Ruby on Rails",
                        "file": "rails.png"
                    },
                    "jekyll": {
                        "display": "Jekyll",
                        "file": "jekyll.png"
                    },
                    "wordpress": {
                        "display": "Wordpress",
                        "file": "wordpress.png"
                    },
                    "jquery": {
                        "display": "jQuery",
                        "file": "jquery.png"
                    },
                    "elasticsearch": {
                        "display": "Elasticsearch",
                        "file": "elasticsearch.svg"
                    },
                    "sql": {
                        "display": "MySQL / Postgres",
                        "file": "sql.png"
                    },
                    "dynamodb": {
                        "display": "AWS DynamoDB",
                        "file": "dynamodb.png"
                    },
                    "rekognition": {
                        "display": "AWS Rekognition",
                        "file": "rekognition.png",
                    },
                    "lambda": {
                        "display": "AWS Lambda",
                        "file": "aws-lambda-logo.svg",
                    },
                    "python": {
                        "display": "Python",
                        "file": "python.png"
                    },
                    "nltk": {
                        "display": "NLTK (Natural Language Toolkit)",
                        "file": "nltk.png",
                    },
                    "spacy": {
                        "display": "spaCy",
                        "file": "spacy.png"
                    },
                    "leaflet": {
                        "display": "Leaflet",
                        "file": "leaflet.png"
                    },
                    "iiif": {
                        "display": "IIIF (International Image Interoperability Framework)",
                        "file": "iiif.png"
                    },
                    "d3": {
                        "display": "D3",
                        "file": "d3.png"
                    },
                    "svelte": {
                        "display": "Svelte",
                        "file": "svelte.png"
                    },
                    "docker": {
                        "display": "Docker",
                        "file": "docker.png"
                    },
                    "javascript": {
                        "display": "Javascript",
                        "file": "javascript.png"
                    }
                }
            }
        },
        computed: {
            imageSource(){
                let t = this.mappings[this.tech];
                try {
                    return require("@/assets/img/" + t.file);
                } catch(e) {
                    console.log(e);
                    return "error";
                }
            },
            techMeta(){
                return this.mappings[this.tech];
            }
        }
    }
</script>
<style>
    .image {
        display: inline-block;
    }
</style>