<!--
 * @Author: hanxu03
 * @Date: 2021-11-10 21:15:15
 * @LastEditTime: 2021-11-16 14:50:20
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<template>
    <Button @click="increase()">加1</Button>
    <p>第 {{ year }} 年</p>
    <p>姓名： {{ nickname }}</p>
    <p>年龄： {{ age }}</p>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
    setup() {
        const year = ref(0);
        const user = reactive({ nickname: 'xiaoming', age: 26 });

        const increase = () => {
            year.value++
            user.age++
        };
        return {
            year,
            ...toRefs(user),
            increase
        }
    },
})
</script>
