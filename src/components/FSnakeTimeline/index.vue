<template>
  <ul class="f-snake-timeline">
    <li
      class="flex flex-align-start flex-justify-between f-snake-timeline-rows"
      v-for="(items, index) in timeLineList"
      :key="index"
    >
      <template v-for="(subItem, subIdx) in items">
        <div
          class="f-snake-timeline-items"
          :class="{ hidden: subItem._hidden }"
          :key="subIdx"
        >
          <div class="f-snake-timeline-content">
            <slot name="content" v-bind:data="subItem">
              <p>{{ subItem.title }}</p>
              <p>{{ subItem.content }}</p>
              <p>{{ subItem.timestamp }}</p>
            </slot>
          </div>
          <div v-if="subItem._isBottomIcon" class="arrows-bottom-wrap">
            <slot name="bottomArrows" v-bind:data="subItem">
              <img
                class="bottom-img"
                src="../../assets/images/chevronsdownshuangxiajiantou.png"
                alt
              />
            </slot>
          </div>
        </div>
        <div
          v-if="subIdx !== items.length - 1 && subItem._odd"
          class="arrows-wrap"
          :class="{ hidden: items[subIdx + 1] && items[subIdx + 1]._hidden }"
          :key="subIdx + '1'"
        >
          <slot name="rightArrows" v-bind:data="subItem">
            <img class="arrow-img" src="../../assets/images/arrow.png" alt />
          </slot>
        </div>
        <div
          v-if="subIdx !== items.length - 1 && !subItem._odd"
          class="arrows-wrap"
          :class="{ hidden: items[subIdx] && items[subIdx]._hidden }"
          :key="subIdx + '2'"
        >
          <slot name="leftArrows" v-bind:data="subItem">
            <img
              class="arrow-img"
              :class="{ rotate180: !subItem._odd }"
              src="../../assets/images/arrow.png"
              alt
            />
          </slot>
        </div>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FSnakeTimeline",
  props: {
    rowNum: {
      type: Number,
      default: 3
    },
    list: {
      type: Array,
      default: () => [],
      required: true
    },
  },
  computed: {
    timeLineList() {
      let len = this.list.length;
      if (!len) return [];
      const val = JSON.parse(JSON.stringify(this.list));
      const arr = [];
      const rowNum = this.rowNum;
      val.length = len = Math.ceil(len / rowNum) * rowNum;
      let count = 0;
      let boundaryCount = 0;
      let newArr = [];
      for (let i = 0; i < len; i++) {
        let item = val[i];
        let nextItem = val[i + 1];
        if (!item) {
          item = { _hidden: true };
        }
        count++;
        item._odd = boundaryCount % 2 === 0;
        item._isBottomIcon = false;
        newArr.push(item);
        // 达到行数最后一个,或者是所有中的最后一个
        if (count === rowNum || i === len - 1) {
          boundaryCount++;
          item._isBottomIcon = !!nextItem;
          boundaryCount % 2 === 0 && newArr.reverse();
          arr.push(newArr);
        }
        if (count === rowNum) {
          count = 0;
          newArr = [];
        }
      }

      console.log("arr", arr);
      return arr;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.flex {
  display: flex;
}
.flex-justify-between {
  justify-content: space-between;
}
.flex-align-start {
  align-items: flex-start;
}
.rotate180 {
  transform: rotate(180deg);
}
.hidden {
  opacity: 0;
  visibility: hidden;
}
.bottom-img,
.arrow-img {
  width: 50px;
}
</style>
