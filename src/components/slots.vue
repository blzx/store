<template>
    <div>
      <header>
        <p>slot组件头部</p>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>


      <!--<button type="submit">
        <slot>提交</slot>&lt;!&ndash;如果父组件为插槽提供内容，则这里的默认内容会被替换掉&ndash;&gt;
      </button>-->
    </div>
</template>

<script>
    export default {
        name: "slot"
    }
</script>

<style scoped>
  header{
    overflow:hidden;
  }
</style>
