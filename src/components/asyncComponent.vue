<!--
 * @Author: hanxu03
 * @Date: 2021-11-15 15:44:09
 * @LastEditTime: 2021-12-10 16:06:53
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
-->
<template>
  <h1>this is async component</h1>
</template>

<script>
const sleep = time => {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove();
    }, time);
  });
};

export default {
  name: "AsyncComponent",
  async setup() {
    await sleep(3000); //模拟数据请求
  }
};
</script>