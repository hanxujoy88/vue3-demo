<!--
 * @Author: hanxu03
 * @Date: 2021-11-11 15:46:13
 * @LastEditTime: 2021-11-16 14:55:47
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<template>
    <p>newType: {{ newType }}</p>
    <p>oldType: {{ oldType }}</p>
</template>

<script>
import { defineComponent, reactive, toRefs, watch } from 'vue'

export default defineComponent({
    setup() {
        const state = reactive({
            room: {
                id: 100,
                attrs: {
                    size: 80,
                }
            }
        });

        const watchDeep = reactive({
            newType: {},
            oldType: {}
        });

        setInterval(() => {
            state.room.attrs.size++;
        }, 1000);

        // 侦听多个数据
        const stopWatchRoom = watch(
            () => state.room, 
            (newType, oldType) => {
                watchDeep.newType = newType;
                watchDeep.oldType = oldType;
                console.log("新值:", newType, "老值:", oldType);
            },
            { deep: true }   // 加入deep监听复杂数据
        )

        setTimeout(() => {
            // 停止监听
            stopWatchRoom();
        }, 3000);


        return {
            ...toRefs(watchDeep),
        }
    },
})
</script>


