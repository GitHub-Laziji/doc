

<template>
    <div class="bk">
        <div class="img-bk app-img-bk">
            <div class="img">
                <div class="app-text">
                    Laziji
                    <span style="color: #f26ec1;">.</span>
                </div>
                <div class="line"></div>
            </div>
        </div>
        <!-- <div class="btm app-bk-bt"></div> -->
    </div>
    <div class="main-bk app-bk">
        <div
            style="padding: 40px 0;display: flex;justify-content: center;align-items: center;flex-direction: column;font-size: 20px;"
        >
            <div style="width: 80px;height: 4px;background: #409eff;margin: 24px 0;"></div>
            <div class="markdown-body" style="width:500px;text-align: center;" v-html="prefaceHtml"></div>
            <div style="width: 80px;height: 4px;background: #409eff;margin: 24px 0;"></div>
        </div>
        <el-row :gutter="20" v-for="(doc,index) of docs" :key="index" class="doc-item">
            <el-col :span="14">
                <div class="img-bk">
                    <img :src="doc.cover" />
                </div>
            </el-col>
            <el-col :span="10" style="display: flex;align-items: center;">
                <div>
                    <div class="title app-text">{{ doc.name }}</div>
                    <div class="dv"></div>
                    <div class="summary app-text">{{ doc.summary }}</div>
                    <el-button
                        type="primary"
                        :icon="icon.Mouse"
                        round
                        style="width:200px;margin-top: 30px;"
                        @click="$router.push({ path: '/doc', query: { path: doc.path } })"
                    >查看更多</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script >
import showdown from "showdown"
import { Sunny, Moon, Mouse } from '@element-plus/icons-vue'

export default {
    components: {
    },
    data() {
        return {
            icon: { Sunny, Moon, Mouse },
            theme: 0,
            loading: true,
            smHead: false,
            prefaceHtml: "",
            docs: []
        }
    },
    mounted() {
        fetch("./doc/_preface.md").then(resp => resp.text()).then(data => {
            console.log(showdown)
            this.prefaceHtml = new showdown.Converter().makeHtml(data);
            console.log(data)
        });
        fetch("./doc/_content.json").then(resp => resp.json()).then(data => {
            this.docs = data.docs;
            console.log(data)
        });
        window.onscroll = () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            this.smHead = scrollTop > 200;
        }
    }
}
</script>

<style  lang="less" scoped>
.dv {
    width: 80px;
    height: 4px;
    background: #409eff;
    margin: 24px 0;
}
.bk {
    width: 100%;
    overflow: hidden;
    .img-bk {
        height: 100%;
        background-image: linear-gradient(-225deg, #7de2fc 0%, #b9b6e5 100%);
        .img {
            background-image: url(../assets/fj2.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-attachment: fixed;
            height: 102%;
            width: 102%;
            background-position: center center;
            background-size: cover;
            display: flex;
            justify-content: center;
            flex-direction: column;
            color: #303133;
            font-weight: 600;
            font-size: 20vw;
            padding-left: 8vw;
            .line {
                width: 200px;
                height: 16px;
                background: #409eff;
                margin-top: 12px;
                margin-left: 1vw;
            }
        }
    }

    .btm {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 10;
        height: 120px;
        width: 100%;
        background-image: linear-gradient(#ffffff00, #ffffff);
    }
}
.main-bk {
    border-radius: 60px 60px 0 0;
    box-shadow: 0 -10px 10px 0 rgba(0, 0, 0, 0.2);
    margin-top: -60px;
    z-index: 2;
    background: #fff;
    .doc-item {
        margin: 30px 20px 0 20px;
        .img-bk {
            border-radius: 5px;
            background: #d9ecff;
            height: 400px;
        }
        .title {
            font-size: 2.3125rem;
            line-height: 1.3;
            font-weight: 600;
            color: #303133;
        }
        .summary {
            color: #909399;
        }
    }
}

@media (min-width: 576px) {
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
    .bk {
        height: 900px;
    }
}
</style>

