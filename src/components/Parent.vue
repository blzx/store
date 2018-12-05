<template>
  <div class="hello">
    <h1>parent组件</h1>
    <p>{{msg}}</p>
    <hr>
    <children :msg="msg" @changed="getInputMsg" @updata="getNewMsg"></children>

    <hr>
    <testslots>
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

      <!--<span>tijiao</span>--> <!--替换子组件插槽button的默认内容-->
    </testslots>
  </div>
</template>

<script>
  import children from './children';
  import testslots from './testslots';
export default {
  name: 'Parent',
  data () {
    return {
      msg: '12Welcome to Your Vue.js App ~~',
      message:'父组件数据',
    }
  },
  methods:{
    getInputMsg(msg){
      console.log(msg); // 通过传参的方式拿到子组件传过来的数据
      this.msg = msg;
    },
    getNewMsg(arg){
      this.msg = arg;
    },
  },
  components:{
    children,
    testslots,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
