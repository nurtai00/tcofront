<script>
export default {
  props: {
    text: {
      type: String,
    },
    selected: {
      type: Boolean,
    },
  },
}
</script>

<template>
  <div class="tag" :class="{ tag_selected: selected }">
    <span v-text="text"></span>
  </div>
</template>

<style scoped lang="scss">
.tag {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #015467;
  padding: 6px 10px;
  border: 1px solid #015467;
  border-radius: 4px;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 8px;
  @media (orientation: portrait) {
    border: 1px solid #30454e;
    color: #30454e;
    font-size: 14px;
    line-height: 18px;
  }
  &_selected {
    background: #015467;
    color: #fff;
  }
}
</style>
