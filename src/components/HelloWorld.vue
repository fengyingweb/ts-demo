<template>
  <div class="hello">
    <div @click="onClick">
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
      <p class="desc">Written by {{post.author}} on {{date}}</p>
    </div>
    <van-button type="primary" plain @click="handleBtnClick">Button</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { Button } from 'vant';

// 在这里对数据进行类型约束
export interface Post {
  title: string;
  body: string;
  author: string;
  datePosted: Date;
}

@Component({
  components: {
    [Button.name]: Button
  }
})
export default class HelloWorld extends Vue {
  @Prop() private post!: Post;
  

  // 相当于computed
  private get date() {
    return `${this.post.datePosted.getFullYear()}/${this.post.datePosted.getMonth()}/${this.post.datePosted.getDate()}`;
  }

  // 相当于this.$emit('on-click', e.target, e)
  @Emit()
  onClick(e: Event) {
    return e.target;
  }

  // 相当于this.$emit('click-btn', 'btn-click')
  @Emit('click-btn')
  handleBtnClick() {
    return 'btn-click';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}

.desc {
  font-style: italic;
}
</style>
