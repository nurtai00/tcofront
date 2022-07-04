<template>
  <label
    :for="id"
    class="checkbox validate-me"
    :class="{ 'has-error': required && !value }"
  >
    <input
      :id="id"
      v-model="model"
      :disabled="disabled"
      type="checkbox"
      class="checkbox__field"
    />
    <span class="checkbox__indicator" />
    <span>
      <!-- @slot slot for checkbox label -->
      <slot />
    </span>
  </label>
</template>

<script>
/**
 * @displayName Checkbox
 */
export default {
  name: 'Checkbox',
  model: {
    event: 'change',
    prop: 'value',
  },
  props: {
    /**
     * ID of the checkbox
     */
    id: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * Disabled state of the checkbox
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Value of the checkbox
     * @model
     */
    value: {
      type: Boolean,
      default: false,
    },
    /**
     * Required state of the checkbox
     */
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('change', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
$checkbox-disabled: #3c474c;

.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;

  span.checkbox__indicator {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    background: #f6f6f6;
    border-radius: 6px;
    margin-right: 8px;
    &::before {
      content: '';
      opacity: 0;
      position: absolute;
      top: 2px;
      left: 50%;
      width: 5px;
      height: 10px;
      margin-left: -3px;
      border: 1px solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg) translate(0, 0);
      transition: all 0.3s ease;
    }
    &:hover {
      background: #f3f5f8;
      box-shadow: inset 0px 0.5px 4px rgba(0, 196, 140, 0.62);
      border: 1px solid $c-base;
    }
  }

  &__field {
    appearance: none;
    position: absolute;
    opacity: 0.5;
    &:checked ~ span.checkbox__indicator {
      background: $c-base;
      border: 1px solid $c-base;
    }
    &:checked ~ span.checkbox__indicator::before {
      opacity: 1;
    }
    &:disabled ~ span.checkbox__indicator {
      border-color: $checkbox-disabled;
      background: $checkbox-disabled;
      opacity: 0.1;
    }
    &:disabled ~ span {
      color: $checkbox-disabled;
      opacity: 0.1;
    }
  }
}
</style>
