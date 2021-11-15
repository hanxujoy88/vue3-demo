<!--
 * @Author: hanxu03
 * @Date: 2021-11-11 15:46:13
 * @LastEditTime: 2021-11-12 16:38:33
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<script>
import { defineComponent, reactive, ref, toRefs, watchEffect } from 'vue'

export default defineComponent({
    setup() {
        const state = reactive({ nickname: 'xiaoming', age: 20});
        const year = ref(0);

        setInterval(() => {
            state.age++;
            year.value++;
        }, 1000);

        watchEffect(() => {
            console.log(state.age);
            console.log(year.value);
        });


        // 修改age值时会触发watch回调
        // watch(
        //     () => state.age,
        //     (newAge, oldAge) => {
        //         console.log('新值', newAge, '老值', oldAge);
        //     } 
        // )


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
        }
    },
})
</script>


