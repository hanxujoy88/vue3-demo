/*
 * @Author: hanxu03
 * @Date: 2021-11-11 16:55:48
 * @LastEditTime: 2021-11-15 11:40:03
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
 */
import { ref, computed } from "vue";

export default function useCount(initValue = 1) {
    const count = ref(initValue);

    const increase = delta => {
        if (typeof delta !== "undefined") {
            count.value += delta;
        } else {
            count.value += 1;
        }
    };
    const multiple = computed(() => count.value * 2);

    const decrease = delta => {
        if (typeof delta !== "undefined") {
            count.value -= delta;
        } else {
            count.value -= 1;
        }
    };

    return {
        count,
        multiple,
        increase,
        decrease,
    };
}