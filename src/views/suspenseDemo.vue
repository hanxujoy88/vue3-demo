<!--
 * @Author: hanxu03
 * @Date: 2021-11-15 15:40:56
 * @LastEditTime: 2021-11-15 16:57:59
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<template>
    <Suspense>
        <template #default>
            <async-component></async-component>
        </template>
        <template #fallback>
            <div>Loading...</div>
        </template>
    </Suspense>
</template>

<script setup>
import { defineComponent } from 'vue'
const asyncComponent = defineComponent(() => import('./asyncComponent.vue'));
</script>