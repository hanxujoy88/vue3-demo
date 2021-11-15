<!--
 * @Author: hanxu03
 * @Date: 2021-11-15 15:40:56
 * @LastEditTime: 2021-11-15 17:38:26
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
        asyncComponent: defineAsyncComponent(() => import('./asyncComponent.vue'))
    }
}
</script>