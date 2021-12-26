<template>
    <home-cover :height="240">
        <template v-slot>
            <div style="padding:16px">
                <div class="markdown-body" v-html="html"></div>
            </div>
        </template>
    </home-cover>
</template>

<script >
import showdown from "showdown"
import HomeCover from "../components/HomeCover.vue"

export default {
    components: {
        HomeCover
    },
    data() {
        return {
            html: ""
        }
    },
    mounted() {
        fetch(this.$route.query.path).then(resp => resp.text()).then(data => {
            this.html = new showdown.Converter().makeHtml(data);
        });
    }
}
</script>

<style  lang="less" scoped>
</style>

