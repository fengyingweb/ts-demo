<template>
  <div class="home">
    <van-nav-bar ref="navBar" fixed title="Vant UI"></van-nav-bar>
    <img alt="Vue logo" src="../../../assets/logo.png">
    <h2>{{count}}</h2>
    <div class="btn-box">
      <van-button type="primary" @click="onAdd">加</van-button>
      <van-button type="danger" @click="onDecrease">减</van-button>
    </div>
    <HelloWorld
      ref="helloWorld"
      v-for="post in blogPosts"
      :post="post"
      :key="post.title"
      @on-click="handleClick"
      @click-btn="handleBtnClick"/>
    
    <van-button type="primary" @click="goToAbout">Go To About</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { State, Getter, Mutation, Action } from 'vuex-class';
import HelloWorld, {Post} from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { Button } from 'vant';

@Component({
  components: {
    HelloWorld,
    [Button.name]: Button
  },
})
export default class Home extends Vue {
  // 相当于data() {return {blogPosts: []}}
  private blogPosts: Post[] = [
    {
      title: 'My first blogpost ever!',
      body: 'Lorem ipsum dolor sit amet.',
      author: 'Elke',
      datePosted: new Date(2019, 1, 18),
    },
    {
      title: 'Look I am blogging!',
      body: 'Hurray for me, this is my second post!',
      author: 'Elke',
      datePosted: new Date(2019, 1, 19),
    },
    {
      title: 'Another one?!',
      body: 'Another one!',
      author: 'Elke',
      datePosted: new Date(2019, 1, 20),
    },
  ];

  // 相当于this.$store.state.app.count
  @State(state => state.app.count) count

  // 相当于this.$store.commit('addCount', param)
  @Mutation('addCount') addCount
  @Mutation('decreaseCount') decreaseCount

  onAdd(): void {
    this.addCount();
  }

  onDecrease(): void {
    this.decreaseCount();
  }

  handleClick(target: any, e: Event) {
    console.log(target);
    console.log(e);
  }

  handleBtnClick(val: string) {
    console.log(val);
  }

  goToAbout() {
    this.$router.push({path: '/about'});
  }
  
  /**
   * 相当于
   * watch: {
   *   count: [
   *     {
   *       handler: onChangeCount,
   *       deep: false,
   *       immediate: false
   *     }
   *   ],
   * 
   *   blogPosts: [
   *     {
   *       handler: onChangeBlogPosts,
   *       deep: true,
   *       immediate: true
   *     }
   *   ]
   * },
   * 
   * methods: {
   *   onChangeCount(nVal, oVal) {},
   * 
   *   onChangeBlogPosts(nVal, oVal) {}
   * }
   */
  @Watch('count')
  onChangeCount(nVal: number, oVal: number) {
    console.log(nVal);
  }
  
  @Watch('blogPosts', {immediate: true, deep: true})
  onChangeBlogPosts(nVal: Post[], oVal: Post[]) {
    console.log(nVal);
  }

  beforeRouteEnter(to: any, from: any, next: any) {
    console.log(from);
    next();
  }

  private beforeCreate(): void {}
  private created(): void {}

  private beforeMount(): void {}
  private mounted(): void {
    console.log(this.$refs['helloWorld']);
  }

  private beforeUpdate(): void {}
  private updated(): void {}

  private beforeDestroy(): void {}
  private destroyed(): void {}
}
</script>

<style lang="less" scoped>
  .home {
    padding-top: 46px;
  }
</style>
