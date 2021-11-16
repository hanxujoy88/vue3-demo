<!--
 * @Author: hanxu03
 * @Date: 2021-11-15 14:21:01
 * @LastEditTime: 2021-11-16 15:09:25
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<template>
  <teleport to="body">
     <div class="block" style="background: green;">teleport</div>
  </teleport>
   <div class="block" style="background: yellow">组件内</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {}
})
</script>

<style>
.block {
   width: 300px;
   height: 100px;
   line-height: 100px;
   margin: 20px auto;
   text-align: center;
}
</style>
