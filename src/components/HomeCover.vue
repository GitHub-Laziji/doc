

<template>
    <div class="bk" :style="{height:height?(height+'px'):null}">
        <div class="img-bk">
            <div class="img">
                <div v-if="title">
                    {{ title }}
                    <span style="color: #f26ec1;">.</span>
                </div>
                <div v-if="title" class="line"></div>
            </div>
        </div>
    </div>
    <div class="main-bk">
        <slot></slot>
    </div>
</template>

<script >
import { Sunny, Moon } from '@element-plus/icons-vue'

export default {
    components: {
    },
    props: {
        title: {
            type: String
        },
        height: {
            type: Number
        }
    },
    data() {
        return {
            icon: { Sunny, Moon },
            loading: true
        }
    },
    mounted() {

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
.bk {
    width: 100%;
    overflow: hidden;
    height: var(--len-home-cover-h);
    .img-bk {
        height: 100%;
        background-image: var(--img-home-cover);
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
            color: var(--color-text1);
            font-weight: 600;
            font-size: 20vw;
            padding-left: 8vw;
            .line {
                width: 200px;
                height: 16px;
                background: var(--color-primary);
                margin-top: 12px;
                margin-left: 1vw;
            }
        }
    }
}
.main-bk {
    border-radius: 60px 60px 0 0;
    box-shadow: 0 -10px 10px 0 rgba(0, 0, 0, 0.2);
    margin-top: -60px;
    z-index: 2;
    background: var(--color-body-bk);
    padding: 3vw;
    overflow: hidden;
}
</style>

