

<template>
  <div :class="['day', 'night'][theme]">
    <div class="header" :class="[smHead ? 'header-sm' : '']">
      <div>
        <img src="./assets/fb3.svg" />
        <div class="name">Laziji</div>
        <div class="desc">&nbsp;/&nbsp;Designer</div>
      </div>
      <div>
        <div class="item">作品集</div>
        <div class="item">关于我</div>
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
    <div class="bk">
      <div class="img">Laziji</div>
      <div class="btm"></div>
    </div>
    <div
      style="padding: 40px 0;display: flex;justify-content: center;align-items: center;flex-direction: column;font-size: 20px;"
    >
      <div style="width: 80px;height: 4px;background: #409eff;margin: 24px 0;"></div>
      <div style="width:500px;text-align: center;" v-html="prefaceHtml"></div>
      <div style="width: 80px;height: 4px;background: #409eff;margin: 24px 0;"></div>
    </div>
    <el-row :gutter="20" v-for="(doc,index) of docs" :key="index" style="margin:30px 20px 0 20px;">
      <el-col :span="14">
        <div style="border-radius: 5px;background: #d9ecff;height: 400px;">
          <img :src="doc.cover" />
        </div>
      </el-col>
      <el-col :span="10" style="display: flex;align-items: center;">
        <div>
          <div
            style="font-size: 2.3125rem;line-height: 1.3;font-weight: 600;color: #303133;"
          >{{ doc.name }}</div>
          <div style="width: 80px;height: 4px;background: #409eff;margin: 24px 0;"></div>
          <div style="color: #909399;">{{ doc.summary }}</div>
          <el-button
            type="primary"
            :icon="icon.Mouse"
            round
            style="width:200px;margin-top: 30px;"
          >查看更多</el-button>
        </div>
      </el-col>
    </el-row>
    <div style="height: 800px;"></div>
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
.night {
  background: #000;
  .header {
    background: #000000aa;
    div {
      color: #fff !important;
    }
  }
  .bk {
    .img {
      background-color: #9791cd;
      color: #fff !important;
    }
    .btm {
      background-image: linear-gradient(#ffffff00, #000);
    }
  }
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
.bk {
  width: 100%;
  position: relative;
  .img {
    background-image: url(./assets/fj2.png);
    background-color: #add5fd;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    position: relative;
    background-position: center center;
    background-size: cover;
    display: flex;
    align-items: center;
    color: #303133;
    font-weight: 600;
    font-size: 20vw;
    padding-left: 10vw;
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
