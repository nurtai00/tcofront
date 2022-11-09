<template>
  <label :for="id" class="radio">
    <input
      :id="id"
      v-model="model"
      :value="val"
      :name="name"
      :disabled="disabled"
      type="radio"
      class="radio__field"
    />
    <span class="radio__indicator" />
    <span class="radio__message"><slot /></span>
  </label>
</template>

<script>
/**
 * @displayName Radio
 */
export default {
  name: 'Radio',
  model: {
    event: 'change',
    prop: 'value',
  },
  props: {
    /**
     * ID of the radio
     */
    id: {
      type: [String, Number],
      default: '',
      required: true,
    },
    /**
     * Name
     */
    name: {
      type: String,
      default: '',
      required: true,
    },
    /**
     * Disabled state
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Value
     * @model
     */
    val: {
      type: [String, Number, Boolean, Object],
      default: '',
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        /**
         * Emit the value from radio
         * @type {function}
         */
        this.$emit('change', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
$radio-border: #015467;
$radio-background: $c-main;
$radio-disabled: #3c474c;
.radio {
  display: flex;
  align-items: center;
  cursor: pointer;

  span.radio__indicator {
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
    border: 1px solid $radio-border;
    border-radius: 50%;
    margin-right: 8px;
    &::before {
      position: absolute;
      content: '';
      top: 49.5%;
      left: 50%;
      width: 12px;
      height: 12px;
      transform: translate(-50%, -50%);
      background-color: $radio-background;
      border-radius: 50%;
      transition: 0.25s;
      opacity: 0;
    }
  }

  &__field {
    appearance: none;
    position: absolute;
    opacity: 0.5;
    &:checked ~ span.radio__indicator::before {
      opacity: 1;
    }
    &:disabled ~ span.radio__indicator {
      border-color: $radio-disabled;
      &::before {
        background-color: $radio-disabled;
      }
    }
    &:disabled ~ span {
      color: $radio-disabled;
      opacity: 0.1;
    }
  }
  span.radio__message {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #30454e;
  }
}
</style>
