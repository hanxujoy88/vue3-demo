<!--
 * @Author: hanxu03
 * @Date: 2021-11-15 15:40:56
 * @LastEditTime: 2021-11-15 15:57:57
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

<script>
import { defineComponent } from 'vue'
import asyncComponent from './asyncComponent.vue'

export default defineComponent({
    setup() {
        return { asyncComponent }
    }
})
</script>