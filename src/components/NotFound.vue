<template>
  <div class="wrapper">
    <van-nav-bar class="nav-bar" title="404" left-arrow @click-left="goBack"></van-nav-bar>
    <div class="img-wrapper">
      <img :src="imgSrc" alt="图片不存在" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {
  private imgSrc: string = require('@/assets/img/404.png');

  goBack() {
    this.$router.go(-1);
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 375px;
  }
  
  .nav-bar {
    width: 100%;
  }
  
  .img-wrapper {
    width: 100%;
    height: 500px;
  }

  img {
    display: block;
    width: 100%;
  }
</style>
