

<template>
    <div class="app" :class="theme">
        <div class="header" :class="[smHead ? 'header-sm' : '']">
            <div>
                <img src="./assets/fb3.svg" />
                <div class="name">Laziji</div>
                <div class="desc">&nbsp;/&nbsp;Designer</div>
            </div>
            <div>
                <div
                    class="item"
                    :class="{ active: $route.path == '/home' }"
                    @click="to('/home')"
                >首页</div>
                <div
                    class="item"
                    :class="{ active: $route.path == '/about' }"
                    @click="to('/about')"
                >关于我</div>

                <el-switch
                    v-model="theme"
                    inline-prompt
                    :active-icon="icon.Sunny"
                    :inactive-icon="icon.Moon"
                    inactive-value="day"
                    active-value="night"
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
                    <img :src="item.icon" />
                </div>
                <div class="type">{{ item.type }}</div>
            </div>
        </div>
        <div class="footer">
            <img src="./assets/fb3.svg" />
            <div class="menu">
                <div
                    class="item"
                    :class="{ active: $route.path == '/home' }"
                    @click="to('/home')"
                >首页</div>
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
import { Sunny, Moon } from '@element-plus/icons-vue'

export default {
    components: {
    },
    data() {
        return {
            icon: { Sunny, Moon },
            theme: "day",
            loading: true,
            smHead: false,
            socialAccounts: []
        }
    },
    mounted() {
        fetch("./doc/_content.json").then(resp => resp.json()).then(data => {
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
.app {
    background: var(--color-body-bk);
}
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    height: var(--len-header-h);
    background: var(--color-header-bk);
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    &.header-sm {
        --len-header-h: var(--len-header-h-sm);
        --len-header-icon-h: var(--len-header-icon-h-sm);
        --fs-header-name: var(--fs-header-name-sm);
        --fs-header-desc: var(--fs-header-desc-sm);
        --fs-header-item: var(--fs-header-item-sm);
    }
    img {
        height: var(--len-header-icon-h);
        transition: all 0.4s ease;
    }
    .name {
        color: var(--color-text1);
        transition: all 0.4s ease;
        margin-left: 16px;
        font-weight: 600;
        line-height: 1.3;
        letter-spacing: 0.025rem;
        font-size: var(--fs-header-name);
    }
    .desc {
        transition: all 0.4s ease;
        font-weight: 600;
        color: var(--color-text2);
        font-size: var(--fs-header-desc);
    }
    .item {
        padding: 0 30px;
        cursor: pointer;
        transition: all 0.4s ease;
        border-bottom: 4px solid #00000000;
        border-top: 4px solid #00000000;
        margin-right: 10px;
        font-weight: 600;
        color: var(--color-text1);
        font-size: var(--fs-header-item);
        &:hover,
        &.active {
            padding-top: 18px;
            padding-bottom: 18px;
            color: var(--color-primary);
            border-bottom: 4px solid var(--color-primary);
        }
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
        img {
            height: 100%;
            width: 100%;
        }
    }
    .type {
        color: var(--color-text1);
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
</style>
<style>
</style>
