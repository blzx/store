import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters:{
    doneTodos: state => {
      return state.todos.filter( todo => todo.done ) // 返回done为true的选项   组件中使用属性的方式访问store.getters对象
    },

    doneTodosCount:(state,getters) => { // Getter 也可以接受其他 getter 作为第二个参数
      return getters.doneTodos.length;
    },

    getTodoById: (state) => (id) => {
      return state.todos.find( todo => todo.id === id );
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});

// store.commit('increment') // store.commit方法触发，提交mutations

// console.log(store.state.count)
