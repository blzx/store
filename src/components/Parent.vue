<template>
  <div class="hello">
    <h1>parent组件</h1>
    <p>{{msg}}</p>
    <hr>
    <children :msg="msg" @changed="getInputMsg" @updata="getNewMsg"></children>

    <hr>
    <slots>
      <!--使用template模板 添加slot属性-->
      <!--<template slot="header">
        <h1>插槽组件头部</h1>
      </template>

      <p>未命名的main内容</p>
      <p>And another one.</p>

      <template slot="footer">
        <p>底部连接</p>
      </template>-->

      <!--直接给标签添加slot属性-->
      <h1 slot="header">插槽组件头部{{message}}</h1>

      <p>未命名的main内容</p>
      <p>And another one.</p>

      <p slot="footer">底部连接</p>

      <!--<span>tijao</span>--> <!--替换子组件插槽button的默认内容-->
    </slots>

    <button @click="fn">count++</button>
  </div>
</template>

<script>
  import children from './children';
  import slots from './slots';
  // import store from '../store/store'
  import { mapState, mapActions } from 'vuex' // mapState辅助函数帮助生成计算属性，解决computed中的状态重复冗余

export default {
  name: 'Parent',
  mounted(){
    console.log(this.count)
  },
  data () {
    return {
      msg: '12Welcome to Your Vue.js App ~~',
      message:'父组件数据',
      // count: store.state.count,
    }
  },
  computed:mapState({
    // count(){
    //   return this.$store.state.count; // 使用this.$store.state.count通过根实例中注册的store来访问count(简化代码)
    // }
    count: state => state.count

  }),
  methods:{
    getInputMsg(msg){
      console.log(msg);
      this.msg = msg;
    },
    getNewMsg(arg){
      this.msg = arg;
    },
    fn(){
      this.$store.commit('increment');
      console.log(this.count)
    }

  },
  components:{
    children,
    slots,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
