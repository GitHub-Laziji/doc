

<template>
    <div :class="['day', 'night'][theme]">
        <div class="header app-header-bk" :class="[smHead ? 'header-sm' : '']">
            <div>
                <img src="./assets/fb3.svg" />
                <div class="name app-text">Laziji</div>
                <div class="desc app-text">&nbsp;/&nbsp;Designer</div>
            </div>
            <div>
                <div class="item app-text">作品集</div>
                <div class="item app-text">关于我</div>
                <el-switch
                    v-model="theme"
                    inline-prompt
                    :active-icon="icon.Sunny"
                    :inactive-icon="icon.Moon"
                    :inactive-value="0"
                    :active-value="1"
                    active-color="#303133"
                    inactive-color="#303133"
                    border-color="#303133"
                    width="42"
                ></el-switch>
            </div>
        </div>
        <router-view />
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
.night /deep/ .app {
    &-text {
        color: #fff !important;
    }
    &-header-bk {
        background: #000000aa !important;
    }
    &-img-bk {
        background-image: linear-gradient(
            -20deg,
            #2b5876 0%,
            #4e4376 100%
        ) !important;
    }
    &-bk-bt {
        background-image: linear-gradient(#ffffff00, #1f2223) !important;
    }
}
.night {
    background: #1f2223;
}
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: #ffffffaa;
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    img {
        transition: all 0.4s ease;
    }
    .name {
        color: #303133;
        transition: all 0.4s ease;
        margin-left: 16px;
        font-weight: 600;
    }
    .desc {
        transition: all 0.4s ease;
        font-weight: 600;
        color: #909399;
    }
    > div:first-child {
        display: flex;
        align-items: center;
        height: 100%;
        transition: all 0.4s ease;
    }
    > div:last-child {
        display: flex;
        align-items: center;
        height: 100%;
        transition: all 0.4s ease;
        margin-right: 30px;
        .item {
            padding: 0 30px;
            cursor: pointer;
            transition: all 0.4s ease;
            border-bottom: 4px solid #00000000;
            border-top: 4px solid #00000000;
            margin-right: 10px;
            font-weight: 600;
            color: #303133;
            &:hover {
                padding-top: 18px;
                padding-bottom: 18px;
                color: #409eff;
                border-bottom: 4px solid #409eff;
            }
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
    .header {
        height: 98px;
        img {
            height: 70px;
        }
        .name {
            font-size: 1.3rem;
        }
        .desc {
            font-size: 1.3rem;
        }
        > div:last-child div {
            font-size: 1.55rem;
            line-height: 1.3;
            letter-spacing: 0.025rem;
        }
    }
    .header-sm {
        height: 72px;
        img {
            height: 56px;
        }
        .name {
            font-size: 1.2rem;
        }
        .desc {
            font-size: 1.2rem;
        }
        > div:last-child div {
            font-size: 1.35rem;
            line-height: 1.2;
            letter-spacing: 0.025rem;
        }
    }
    .bk {
        height: 700px;
    }
}
</style>
<style>
body {
    margin: 0;
    padding: 0;
}
* {
    box-sizing: border-box;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
