<!--
 * @Author: hanxu03
 * @Date: 2021-11-15 15:40:56
 * @LastEditTime: 2021-11-16 15:16:21
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
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        asyncComponent: defineAsyncComponent(() => import('../components/asyncComponent.vue'))
    }
}
</script>