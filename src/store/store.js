import Vue from 'vue'
import Vuex from 'vuex'
import { PLUS_COUNT }from './types'
import mutations from './mutation'

Vue.use(Vuex);
// Vue.set(state.obj, 'newProp', 123); 等同于 state.obj = { ...state.obj, newProp: 123 }  -> 给state.obj对象添加新的属性

const state = {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  };
export default new Vuex.Store({
  state,
  getters:{
    doneTodos: state => {
      return state.todos.filter( todo => todo.done ) // 返回done为true的选项   组件中使用属性的方式访问store.getters对象
    },

    doneTodosCount:(state,getters) => { // Getter 也可以接受其他 getter 作为第二个参数 通过这个参数获取其他属性值
      return getters.doneTodos.length;
    },

    getTodoById: (state) => (id) => { // 返回了一个函数  上面两个是返回了一个属性值
      return state.todos.find( todo => todo.id === id );
    }
  },
  // mutations, // 更改store中的状态  在storeMutation组件中使用

  mutations: {  // 提供actions使用
    increment (state) {
      state.count ++;
    },
    incrementBy (state,payload) {
      state.count += payload.amount;
    },
  },
  actions:{ // 不直接改变状态，而是提交mutation事件 可执行任意异步操作
    // increment(context){ // context对象与store实例具有相同的方法和属性（但不是store实例本身），可以调用context.commit 或者通过context.state,context.getters 获取state和getters
    //   context.commit('increment')
    // }

    // 参数结构方法简化代码 (结构context对象)
    // increment ({ commit }){  // 组件中通过store.dispatch('increment') 触发
    //   commit('increment')
    // }

    // 支持异步操作
    increment ({ commit }) { // 不传参数
      setTimeout(() => {
        commit('increment');
      },1000)
    },
    incrementBy ({ commit }, payload) { // 传参
      console.log(payload);
      setTimeout(() => {
        commit('increment', payload);
      },1000)
    },

    actionA ({ commit }){
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          commit('increment');
          resolve();
        },2000)
      })
    },
    async actionB ({ dispatch, commit }) {
      await dispatch('actionA'); // 等待 actionA 完成
      commit('gotOtherData', await getOtherData())
    }
  }
});
// store.commit('increment') // store.commit方法触发，提交mutations

// console.log(store.state.count)
