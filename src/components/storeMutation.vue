<template>
  <div>
    <h1>storeMutation</h1>
    <hr>
    <button @click="fn">count++</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex' // mapState辅助函数帮助生成计算属性，解决computed中的状态重复冗余

  export default {
    name: "storeMutation",
    mounted(){
      // console.log(localStorage.getItem(this.count))
      console.log(this.count)
    },
    data () {
      return {

      }
    },

    computed:{
      ...mapState({
        count:'count',
      }),

      ...mapGetters([
        'doneTodos',
        'doneTodosCount',
      ])
    },
    methods:{
      // fn(){
      //   this.$store.commit('increment',{
      //     amount:1
      //   }); // 通过$store.commit()触发increment函数 提交mutations
      //   // localStorage.setItem('count',this.count);
      //   console.log(this.count)
      // },

      // fn(){
      //   this.$store.commit({ // 使用对象方式
      //     type:'PLUS_COUNT', // 定义常量 代替mutation事件函数（increment）
      //     amount: 1,
      //   });
      // },
      ...mapMutations([ // 字符串数组
        'increment' // 如果需要传参则在方法中使用this.increment({amount:1}); 如下fn方法
      ]),
      // ...mapMutations({ // 对象
      //   add:'increment' // 如果需要传参则在方法中使用this.add({amount:1});如下fn方法
      // }),
      fn(){
        this.increment({amount:1}); // 或者this.add({amount:1});
        console.log(this.count);
      }
    }
  }

</script>

<style scoped>

</style>
