<!--
 * @Author: hanxu03
 * @Date: 2021-11-10 21:03:54
 * @LastEditTime: 2021-11-16 14:49:46
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<template>
<Button @click="increase()">加1</Button>
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
        const increase = () => {
            year.value ++
            user.age ++
        };
        return { year, user, increase }
    },
})
</script>
