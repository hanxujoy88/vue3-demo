<!--
 * @Author: hanxu03
 * @Date: 2021-11-10 21:03:54
 * @LastEditTime: 2021-11-10 21:23:12
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<template>
<div>
    <p>第 {{ year }} 年</p>
    <p>姓名: {{ user.nickname }}</p>
    <p>年龄: {{ user.age }}</p>
</div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
    setup() {
        const year = ref(0);
        const user = reactive({ 
            nickname: 'xiaoming',
            age: 26
        });
        setInterval(() => {
            year.value ++
            user.age ++
        }, 1000);
        return { year, user }
    },
})
</script>
