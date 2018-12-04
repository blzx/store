<template>
    <div>
      <h3>children组件</h3>
      <p>{{msgs}}</p>
      <input v-model="msgs" @change="setInputMsg">

      <button @click="upData">修改props传值</button>
    </div>
</template>

<script>
    // 子组件向父组件传值使用订阅发布模式
    export default {
      name: "children",
      mounted(){
        // this.getProps();
      },
      data(){
        return {
          msgs: this.msg,      //msgs:this.msg, // data 中不能使用和props中名称相同的变量;使用this获取props值或直接使用在组件中
          message:'hhhhh'
        }
      },
      methods:{
        getProps(){
          console.log(this.msgs === this.msg);
        },
        setInputMsg(){ // 给父组件传值
          this.$emit('changed',this.msgs) //使用事件监听的方式，监听changed事件；在父组件调用子组件时，通过监听change事件获取子组件的传值  // 抛出一个值（第二个参数）  当input框的值改变的时候父组件获取这个值
        },
        upData(){
          this.$emit('updata',this.message)
        }
      },
      props:{
        msg:{
          type:String,
          default:'hello'
        }
      }
    }
</script>

<style scoped>

</style>
