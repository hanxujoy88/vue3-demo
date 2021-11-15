<!--
 * @Author: hanxu03
 * @Date: 2021-11-15 14:21:01
 * @LastEditTime: 2021-11-15 14:41:36
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<template>
  <teleport to="body">
     <div style="text-align:center">teleport展示</div>
  </teleport>
   <div>组件内展示</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {}
})
</script>
