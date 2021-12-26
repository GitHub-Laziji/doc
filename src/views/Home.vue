

<template>
    <home-cover :title="title">
        <template v-slot>
            <div
                style="padding: 40px 0;display: flex;justify-content: center;align-items: center;flex-direction: column;font-size: 20px;"
            >
                <div style="width: 80px;height: 4px;background: #409eff;margin: 24px 0;"></div>
                <div
                    class="markdown-body"
                    style="width:500px;text-align: center;"
                    v-html="prefaceHtml"
                ></div>
                <div style="width: 80px;height: 4px;background: #409eff;margin: 24px 0;"></div>
            </div>
            <div :gutter="40" v-for="(doc,index) of docs" :key="index" class="doc-item">
                <div class="cover">
                    <img :src="doc.cover" />
                </div>
                <div class="op">
                    <div class="title">{{ doc.name }}</div>
                    <div class="dv"></div>
                    <div class="summary">{{ doc.summary }}</div>
                    <el-button
                        type="primary"
                        :icon="icon.Mouse"
                        round
                        style="width:200px;margin-top: 90px;"
                        @click="$router.push({ path: '/doc', query: { path: doc.path } })"
                    >查看更多</el-button>
                </div>
            </div>
        </template>
    </home-cover>
</template>

<script >
import showdown from "showdown"
import { Mouse } from '@element-plus/icons-vue'
import HomeCover from "../components/HomeCover.vue"

export default {
    components: {
        HomeCover
    },
    data() {
        return {
            icon: { Mouse },
            loading: true,
            prefaceHtml: "",
            docs: [],
            title: "Laziji"
        }
    },
    mounted() {
        fetch("./doc/_preface.md").then(resp => resp.text()).then(data => {
            this.prefaceHtml = new showdown.Converter().makeHtml(data);
        });
        fetch("./doc/_content.json").then(resp => resp.json()).then(data => {
            this.docs = data.docs;
        });
    }
}
</script>

<style  lang="less" scoped>
.dv {
    width: 80px;
    height: 4px;
    background: var(--color-primary);
    margin: 24px 0;
}

.doc-item {
    margin: 30px 20px 0 20px;
    display: flex;
    flex-wrap: wrap;
    .cover {
        border-radius: 5px;
        background: #fafafa;
        height: 400px;
        overflow: hidden;
        border: 1px solid #dcdfe6;
        width: var(--len-home-doc-cover-w);
        img {
            height: 100%;
            width: 100%;
        }
    }
    .op {
        width: var(--len-home-doc-op-w);
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
            font-size: 2.3125rem;
            line-height: 1.3;
            font-weight: 600;
            color: var(--color-text1);
        }
        .summary {
            color: var(--color-text3);
        }
    }
}
</style>

