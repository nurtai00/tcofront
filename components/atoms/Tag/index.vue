<template>
  <div v-if="tag" class="tag" :class="{ tag_selected: tag.selected }">
    <nuxt-link v-if="!!tag.url" :to="tag.url" target="_blank">
      {{ tag.text }}
    </nuxt-link>
    <span v-else @click="clickedTag" v-text="tag.text"></span>
    <svg
      v-if="tag.url"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.25 12.75L12.75 5.25"
        stroke="#015467"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.25 5.25H12.75V12.75"
        stroke="#015467"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      required: true,
    },
  },
  methods: {
    clickedTag() {
      if (!this.tag.url) {
        this.$emit('click', this.tag)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.tag {
  display: inline-flex;
  flex-direction: row;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #015467;
  padding: 6px 10px;
  border: 1px solid #015467;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: 0.3s;

  a {
    color: #015467;
    text-decoration: none;
  }
  svg {
    margin-left: 10px;
  }
  @include tablet() {
    font-size: 14px;
    line-height: 18px;
    svg {
      margin-left: 8px;
    }
  }
  &_selected {
    background: #015467;
    color: #fff;
    svg {
      path {
        stroke: white;
      }
    }
  }
}
</style>
