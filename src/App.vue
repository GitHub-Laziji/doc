

<template>
    <div :class="['day', 'night'][theme]">
        <div class="header app-header-bk" :class="[smHead ? 'header-sm' : '']">
            <div>
                <img src="./assets/fb3.svg" />
                <div class="name app-text">Laziji</div>
                <div class="desc app-text">&nbsp;/&nbsp;Designer</div>
            </div>
            <div>
                <div
                    class="item app-text"
                    :class="{ active: $route.path == '/home' }"
                    @click="to('/home')"
                >作品集</div>
                <div
                    class="item app-text"
                    :class="{ active: $route.path == '/about' }"
                    @click="to('/about')"
                >关于我</div>

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
        <div class="social">
            <div v-for="(item,index) of socialAccounts">
                <div class="icon">
                    <img :src="item.icon">
                </div>
                <div class="type app-text">{{ item.type }}</div>
            </div>
        </div>
        <div class="footer">
            <img src="./assets/fb3.svg" />
            <div class="menu">
                <div
                    class="item"
                    :class="{ active: $route.path == '/home' }"
                    @click="to('/home')"
                >作品集</div>
                <div
                    class="item"
                    :class="{ active: $route.path == '/about' }"
                    @click="to('/about')"
                >关于我</div>
            </div>
            <div class="desc">Made with Laziji | © whatever year this is</div>
        </div>
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
            docs: [],
            socialAccounts: []
        }
    },
    mounted() {
        fetch("./doc/_preface.md").then(resp => resp.text()).then(data => {
            this.prefaceHtml = new showdown.Converter().makeHtml(data);
        });
        fetch("./doc/_content.json").then(resp => resp.json()).then(data => {
            this.docs = data.docs;
            this.socialAccounts = data.socialAccounts;

        });
        window.addEventListener('scroll', () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            this.smHead = scrollTop > 100;
        });
    },
    methods: {
        to(url) {
            this.$router.push(url)
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
    &-bk{
         background: #1f2223;
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
            &:hover,
            &.active {
                padding-top: 18px;
                padding-bottom: 18px;
                color: #409eff;
                border-bottom: 4px solid #409eff;
            }
        }
    }
}
.social {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
        margin: 60px;
    }
    .icon {
        // background: #409eff;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        overflow: hidden;
        img{
            height: 100%;
            width: 100%;
        }
    }
    .type {
        margin-top: 10px;
        text-align: center;
        font-size: 1.25rem;
        line-height: 1.6;
        letter-spacing: 0.01rem;
    }
}
.footer {
    margin-top: 100px;
    background: #00121a;
    height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        height: 80px;
    }
    .menu {
        margin-top: 10px;
        display: flex;
        height: 90px;
        align-items: center;
        .item {
            padding: 0 30px;
            cursor: pointer;
            transition: all 0.4s ease;
            border-bottom: 4px solid #00000000;
            border-top: 4px solid #00000000;
            margin-right: 10px;
            font-weight: 600;
            color: #fff;
            font-size: 1.55rem;
            line-height: 1.3;
            letter-spacing: 0.025rem;
            &:hover {
                padding-top: 18px;
                padding-bottom: 18px;
                color: #409eff;
                border-bottom: 4px solid #409eff;
            }
        }
    }
    .desc {
        color: #fff;
        font-size: 1rem;
        line-height: 1.6;
        margin-top: 10px;
        letter-spacing: 0.1rem;
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
        .item{
            font-size: 1.55rem;
            line-height: 1.3;
            letter-spacing: 0.025rem;
        }
    }
    .header-sm {
        height: 62px;
        img {
            height: 50px;
        }
        .name {
            font-size: 1.2rem;
        }
        .desc {
            font-size: 1.2rem;
        }
        .item{
            font-size: 1.35rem;
            line-height: 1.2;
            letter-spacing: 0.025rem;
        }
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
