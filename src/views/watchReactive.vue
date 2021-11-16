<!--
 * @Author: hanxu03
 * @Date: 2021-11-11 15:46:13
 * @LastEditTime: 2021-11-16 15:04:42
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
import { defineComponent, reactive, ref, toRefs, watch } from 'vue'

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


        // 修改age值时会触发watch回调
        watch(
            () => state.age,
            (newAge, oldAge) => {
                watchObj.newVal = newAge;
                watchObj.oldVal = oldAge;
                console.log('新值', newAge, '老值', oldAge);
            } 
        )

        // watchEffect(() => {
        //     watchObj.watchReactive = state;
        //     watchObj.watchRef = year;
        // });

        // 侦听多个数据
        // watch([
        //     () => state.age,
        //     year,
        // ], ([curAge, newVal], [preAge,oldVal]) => {
        //     console.log('新值:', curAge, '老值:', preAge);
        //     console.log('新值:', newVal, '老值:', oldVal);
        // })

        return {
            ...toRefs(state),
            ...toRefs(watchObj),
        }
    },
})
</script>


