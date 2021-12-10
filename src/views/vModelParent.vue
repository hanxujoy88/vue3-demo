<!--
 * @Author: hanxu03
 * @Date: 2021-12-10 16:05:09
 * @LastEditTime: 2021-12-10 16:34:45
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<template>
  <div>{{count}}</div>
  <vModelChild v-model:count="count" />
</template>

<script>
import { defineComponent, ref } from 'vue'
import vModelChild from '../components/vModelChild.vue';
export default defineComponent({
  components: {
    vModelChild
  },
  setup(){
    const count = ref(0);
    return { count }
  }
});
</script>