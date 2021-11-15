<!--
 * @Author: hanxu03
 * @Date: 2021-11-11 16:56:47
 * @LastEditTime: 2021-11-15 11:40:24
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<template>
  <p>count: {{ count }}</p>
  <p>倍数： {{ multiple }}</p>
  <div>
    <button @click="increase()">加1</button>
    <button @click="decrease()">减一</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import useCount from "../hooks/useCount";

export default defineComponent({
    setup() {
        const { count, multiple, increase, decrease } = useCount(10);
        return {
            count,
            multiple,
            increase,
            decrease,
        };
    },
})
</script>