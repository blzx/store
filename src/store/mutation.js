import { PLUS_COUNT } from './types';

const mutation = {
  // 使用ES2015风格的计算属性命名功能来使用一个常量作为函数名
  // [PLUS_COUNT] (state,payload) { // payload 在组件中展开为一个对象
  //   state.count += payload.amount;
  //   sessionStorage.setItem('count',state.count);
  // },
  increment(state,payload) {
    state.count += payload.amount;
    sessionStorage.setItem('count',state.count);
  }
};

export default mutation;
