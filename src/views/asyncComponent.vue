<template>
<div>
    <h4>这个是一个异步加载数据</h4>
    <p>地区：{{weather.citynm}}</p>
    <p>天气: {{weather.weather}}</p>
    <p>气温: {{weather.temperature}}</p>
</div>
</template>

<script>
import { defineComponent } from "vue"
import axios from "axios"
export default defineComponent({
    async setup(){
        alert('ddd');
        const rawData = await axios.get("http://api.k780.com/?app=weather.today&weaId=1&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json")
        return {
            weather: rawData.result
        }
    }
})
</script>