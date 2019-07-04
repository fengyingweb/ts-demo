<template>
  <div class="about">
    <van-nav-bar :title="title" left-arrow @click-left="goBack"></van-nav-bar>
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  private aboutMsg: string = 'This is an about page';
  private title: string = 'About';

  goBack(): void {
    this.$router.go(-1);
  }
}
</script>
