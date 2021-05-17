<template>
  <div id="app">
    <FSnakeTimeline :list="list" />
    <hr>
    <FSnakeTimeline :row-num="4" :list="list">
      <template v-slot:rightArrows="{ data }">
        <div :class="{ success: data.id < 5 }">------&gt;</div>
      </template>
      <template v-slot:leftArrows="{ data }">
        <div :class="{ error: data.id >= 5 }">&lt;------</div>
      </template>
      <template v-slot:bottomArrows>
        <img class="bottom-img" src="./assets/images/dottom_img.png" alt="" />
      </template>
      <template v-slot:content="{ data }">
        <div class="width-200">
          <p>{{ data.title }}</p>
          <p>{{ data.content }}</p>
          <p>{{ data.timestamp }}</p>
        </div>
      </template>
    </FSnakeTimeline>
  </div>
</template>

<script>
import FSnakeTimeline from "./components/FSnakeTimeline";
// import FSnakeTimeline from "f-snake-timeline";
export default {
  name: "App",
  components: {
    FSnakeTimeline,
  },
  data() {
    return {
      list: [
        { id: 1, title: "标题1", content: "内容1", timestamp: "2021-05-16" },
        { id: 2, title: "标题2", content: "内容2", timestamp: "2021-05-17" },
        { id: 3, title: "标题3", content: "内容3", timestamp: "2021-05-18" },
        { id: 4, title: "标题4", content: "内容4", timestamp: "2021-05-19" },
        { id: 5, title: "标题5", content: "内容5", timestamp: "2021-05-20" },
        { id: 6, title: "标题6", content: "内容6", timestamp: "2021-05-21" },
        { id: 7, title: "标题7", content: "内容7", timestamp: "2021-05-22" },
        { id: 8, title: "标题8", content: "内容8", timestamp: "2021-05-23" },
        { id: 9, title: "标题9", content: "内容9", timestamp: "2021-05-24" },
        { id: 10, title: "标题10", content: "内容10", timestamp: "2021-05-25" },
      ],
    };
  },
};
</script>

<style lang="scss">
.width-200 {
  width: 200px;
  p {
    overflow: hidden; /*超出部分隐藏*/
    white-space: nowrap; /*不换行*/
    text-overflow: ellipsis; /*超出部分文字以...显示*/
  }
}
.bottom-img {
  width: 30px;
  padding: 20px 10px;
}
.success {
  font-weight: 700;
  color: green;
}
.error {
  font-weight: 700;
  color: red;
}
</style>
