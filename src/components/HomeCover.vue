

<template>
    <div class="bk">
        <div class="img-bk">
            <div class="img">
                <div>
                    {{name}}
                    <span style="color: #f26ec1;">.</span>
                </div>
                <div class="line"></div>
            </div>
        </div>
    </div>
    <div class="main-bk"></div>
</template>

<script >
import { Sunny, Moon } from '@element-plus/icons-vue'

export default {
    components: {
    },
    props: {
        name: {
            type: String
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
    .doc-item {
        margin: 30px 20px 0 20px;
        .img-bk {
            border-radius: 5px;
            background: #fafafa;
            height: 400px;
            overflow: hidden;
            border: 1px solid #dcdfe6;
            img {
                height: 100%;
                width: 100%;
            }
        }
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

