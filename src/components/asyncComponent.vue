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