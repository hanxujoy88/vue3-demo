<!--
 * @Author: hanxu03
 * @Date: 2021-11-11 15:46:13
 * @LastEditTime: 2021-12-10 15:10:52
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<template>
    <p>watchReactive: {{ watchReactive }}</p>
    <p>watchRef: {{ watchRef }}</p>
    <p>新值: {{ newVal }}</p>
    <p>旧值: {{ oldVal }}</p>
</template>


<script>
import { defineComponent, reactive, ref, toRefs, watchEffect } from 'vue'

export default defineComponent({
    setup() {
        const state = reactive({ nickname: 'xiaoming', age: 20});
        const year = ref(0);

        const watchObj = reactive({
            newVal: 0,
            oldVal: 0,
            watchReactive: {},
            watchRef: {}
        });

        setInterval(() => {
            state.age++;
            year.value++;
        }, 1000);

        watchEffect(() => {
            // watchObj.watchReactive = state;
            // watchObj.watchRef = year;
            console.log(state);
            console.log(year.value);
        });

        return {
            ...toRefs(state),
            ...toRefs(watchObj),
        }
    },
})
</script>


