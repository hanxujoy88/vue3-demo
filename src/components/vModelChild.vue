<!--
 * @Author: hanxu03
 * @Date: 2021-11-11 15:46:13
 * @LastEditTime: 2021-12-10 16:52:16
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<template>
    <button @click="$emit('update:count', count + 1)">click me count + 1!</button>
</template>


<script>
export default {
  props: {
    count: {
      type: Number
    }
  }
}
</script>


