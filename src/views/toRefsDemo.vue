<!--
 * @Author: hanxu03
 * @Date: 2021-11-10 21:15:15
 * @LastEditTime: 2021-11-11 11:41:36
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<template>
    <div class="homePage">
    <p>第 {{ year }} 年</p>
    <p>姓名： {{ nickname }}</p>
    <p>年龄： {{ age }}</p>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
    setup() {
        const year = ref(0);
        const user = reactive({ nickname: 'xiaoming', age: 26 });
        setInterval(() => {
            year.value++
            user.age++
        }, 1000);
        return {
            year,
            ...toRefs(user)
        }
    },
})
</script>
