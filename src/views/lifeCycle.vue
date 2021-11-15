<!--
 * @Author: hanxu03
 * @Date: 2021-11-11 11:07:25
 * @LastEditTime: 2021-11-12 16:27:37
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<template>
    <div>数量: {{ count }}</div>
    <button @click="count += 1">点我+1</button>
</template>

<script>
import { defineComponent, ref, onBeforeMount, 
onMounted, onRenderTracked, onRenderTriggered } from 'vue'

export default defineComponent({
    // beforeCreate 和 created是vue2的
    beforeCreate() {
        console.log('----beforeCreate----');
    },
    created() {
        console.log('----created----');
    },
    setup() {
        const count = ref(0);
        // vue3 声明周期写在setup中
        console.log('----setup----');
        onBeforeMount(() => {
            console.log('------onBeforeMount-----');
        });
        onMounted(() => {
            console.log('------onMounted-----');
        });
        onRenderTriggered((event) => {
            console.log('------onRenderTriggered-----', event)
        });
        onRenderTracked((event) => {
            console.log('------onRenderTracked-----', event);
        });
        return { count }
    },
});
</script>
