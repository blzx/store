<template>
  <div>
    <h1>storeActions</h1>
    <hr>
    <button @click="fn">count++</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

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
      // this.$store.dispatch触发
      // fn(){
      //   this.$store.dispatch('incrementAsync'); // increment  -> 异步操作 每隔1秒执行一次 <-
      //   console.log(this.count) // 不能点击过快 （异步操作）
      // }

      // 以荷载形式分发
      // fn(){
      //   this.$store.dispatch('incrementAsync',{
      //     amount:1
      //   });
      //   console.log(this.count) // 第一次打印为0，点击后1秒钟后值为1
      // }

      // 使用mapActions辅助函数
      ...mapActions([
        'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
        'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
      ]),
      ...mapActions({
        add:'increment', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
      }),

      fn(){
        this.increment();  // 不带参数
        this.incrementBy({  // 带参数
          amount:10
        });
        // console.log(this.count) // 第一次打印为0，点击后1秒钟后值为1
      }
    }
  }

</script>

<style scoped>

</style>
