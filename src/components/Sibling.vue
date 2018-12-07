<template>
    <div>
      <h1>sibling  Vuex.state</h1>
      <hr>
      <button @click="fn">count++</button>
    </div>
</template>

<script>
  // import store from '../store/store'
  import { mapState, mapGetters, mapActions } from 'vuex' // mapState辅助函数帮助生成计算属性，解决computed中的状态重复冗余
    export default {
        name: "Sibling",
      mounted(){
        console.log(this.doneTodos);
        // console.log(this.countAlias);
        // console.log(this.countPlusLocalState);
        console.log(this.doneTodosCount);
        console.log(this.getTodoId);
        // sessionStorage.setItem('doneTodosCount',this.doneTodosCount)
      },
      data () {
        return {
          localCount:1,
          // count: store.state.count,
        }
      },
      /*computed:{
        count(){
          return this.$store.state.count; // 使用this.$store.state.count通过根实例中注册的store来访问count
        }
      },*/
      /*computed:mapState({  // 使用mapState

        count: state => state.count, // 简化代码（通过mapState 直接访问state）

        // 传字符串参数'count' 等同于 `state => state.count`  效果同上
        countAlias:'count',

        // 为了能够使用 `this` 获取局部状态，必须使用常规函数
        countPlusLocalState(state){
          return state.count + this.localCount
        }
      }),*/

      // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
      // computed:mapState([
      //   // 映射 this.count 为 store.state.count
      //   'count'
      // ]),

      computed:{ // mapState 函数返回的是一个对象，使用对象展开运算符将最终对象传给computed属性，从而与局部计算属性混合使用

        // 使用对象展开运算符将此对象混入到外部对象中
        ...mapState({ // 对象展开运算符
          count:'count', // 如果使用数组的形式可以直接传一个字符串 'count'
        }),

        // 使用getters属性获取state派生出的状态 （ 属性访问 ）
        // doneTodoCount(){
        //   // return this.$store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]
        //   return this.$store.getters.doneTodosCount // -> 1
        // },

        // 通过方法进行访问
        // getTodoId(){
        //   return this.$store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
        // },
        getTodoId(){
            return this.getTodoById(2) // -> { id: 2, text: '...', done: false }
        },
        // 辅助函数，注意不能直接获取到getters 只有以下两种写法
        ...mapGetters({
          add:'getTodoById'
        }),
        ...mapGetters([
          'getTodoById'
        ])

        // ...mapGetters({  // 不能像mapState（{}）可以直接访问state一样直接访问getters  以下写法报错 如果想访问getters里的一个方法可以通过使用this.$store.getters访问的方式或者使用辅助函数拿到属性值，再通过一个computed属性（getTodoId）执行该方法
        //   getTodoId(){
        //     return this.$store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
        //   },
        //
        //   getTodoId: getters => getters.getTodoById(2)
        // }),

        // 使用mapGetters辅助函数 （使用对象展开运算符）
        // ...mapGetters([ // 直接获取getters  属性和返回值
        //   'doneTodos',
        //   'doneTodosCount',
        // ])
      },
      methods:{
        fn(){
          this.$store.commit('increment'); // 通过$store.commit()触发increment函数 提交mutations

          console.log(this.count)
        },
      }
    }
</script>

<style scoped>

</style>
