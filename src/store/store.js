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
  mutations, // 更改store中的状态
});
// store.commit('increment') // store.commit方法触发，提交mutations

// console.log(store.state.count)
