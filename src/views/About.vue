

<template>
    <home-cover :height="240">
        <template v-slot>
            <div style="padding:16px">
                <div
                    style="display: flex;justify-content: center;padding: 60px;position: relative;"
                >
                    <div>
                        <img src="../assets/icon/buoumao-xiyouse.svg" />
                    </div>
                </div>

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
        fetch("./doc/_about.md").then(resp => resp.text()).then(data => {
            console.log(showdown)
            this.html = new showdown.Converter().makeHtml(data);
            console.log(data)
        });
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
    padding: 3vw;
    .doc-item {
        margin: 30px 20px 0 20px;
        .img-bk {
            border-radius: 5px;
            background: #d9ecff;
            height: 400px;
            overflow: hidden;
            img {
                height: 100%;
                width: 100%;
            }
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
        height: 200px;
    }
}
</style>

