<template>
  <div>
    <h1>storeMutation组件</h1>
    <hr>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex' // mapState辅助函数帮助生成计算属性，解决computed中的状态重复冗余

  export default {
    name: "storeMutation",
    mounted(){

    },
    data () {
      return {

      }
    },

    computed:{ // mapState 函数返回的是一个对象，使用对象展开运算符将最终对象传给computed属性，从而与局部计算属性混合使用
      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState({ // 对象展开运算符
        count:'count', // 如果使用数组的形式可以直接传一个字符串 'count'
      }),

      // 使用getters属性获取state派生出的状态 （ 属性访问 ）
      /*doneTodoCount(){
        // return this.$store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]
        return this.$store.getters.doneTodosCount // -> 1
      },*/

      // 通过方法进行访问
      /*getTodoId(){
        return this.$store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
      },*/

      // 使用mapGetters辅助函数 （使用对象展开运算符）
      ...mapGetters([ // 直接获取getters  属性和返回值
        'doneTodos',
        'doneTodosCount',
      ])
    },
    methods:{
      fn(){
        this.$store.commit('increment'); // 通过$store.commit()触发increment函数 提交mutations
        console.log(this.count)
      }
    }
  }
</script>

<style scoped>

</style>
