<template>
    <div style="padding: 10vw;">
    <div class="markdown-body" v-html="html"></div>

    </div>
</template>

<script>
import showdown from "showdown"
export default {
    components: {
    },
    data() {
        return {
            html: ""
        }
    },
    mounted() {
        console.log(this.$router, this.$route.query.path)
        fetch(this.$route.query.path).then(resp => resp.text()).then(data => {
            console.log(showdown)
            this.html = new showdown.Converter().makeHtml(data);
            console.log(data)
        });

    }
}
</script>