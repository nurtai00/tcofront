<template>
  <div class="switch">
    <label
      v-for="name in names"
      :key="name.value"
      :class="[value == name.value && 'active']"
      :style="{ width: width }"
    >
      {{ name.text }}
      <input
        :id="name.value"
        v-model="model"
        name="switch"
        type="radio"
        :value="name.value"
      />
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    /**
     * Names array
     */
    names: {
      type: Array,
      default: () => [],
    },
    /**
     * Размер таба
     * @values small, ''
     */
    width: {
      type: [String, Number],
      default: '',
    },
    /**
     * значение input
     */
    value: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('change', newValue)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
$switch-color: #262728;
$switch-active-back: #03b760;
$switch-active-text: #fbfbfb;
.switch {
  width: 252px;
  display: flex;
  padding: 4px 6px;
  background: #f3f5f8;
  border-radius: 10px;
  label {
    width: 120px;
    display: block;
    font-size: 16px;
    color: $switch-color;
    text-align: center;
    padding: 10px 0;
    background: #f3f5f8;
    transition: 0.3s;
    cursor: pointer;
    &:last-child {
      border-radius: 0 10px 10px 0;
    }
    &:first-child {
      border-radius: 10px 0 0 10px;
    }
    > input {
      width: 0;
      height: 0;
      position: absolute;
      opacity: 0;
      visibility: hidden;
    }

    &.active {
      color: $switch-active-text;
      background: $switch-active-back;
      border-radius: 8px;
    }
  }
}
</style>
