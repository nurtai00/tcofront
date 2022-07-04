<template>
  <nuxt-link
    v-if="type === 'link'"
    :to="name"
    :exact="exact"
    @click.native="$emit('change')"
  >
    <!-- @slot текст таба -->
    <slot />
  </nuxt-link>

  <label v-else :class="[value == name && 'active', size]">
    <input :id="name" v-model="model" type="radio" :value="name" />
    <!-- @slot текст таба -->
    <slot />
  </label>
</template>

<script>
/**
 * Обычный таб, для переключения блоков
 */
export default {
  name: 'Tab',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    /**
     * значение input
     */
    name: {
      type: String,
      default: '',
    },
    /**
     * @model
     */
    value: {
      type: [String, Number],
      default: '',
    },
    /**
     * Размер таба
     * @values small, ''
     */
    size: {
      type: String,
      default: '',
    },
    /**
     * Вид таба (ссылка, либо чекбокс)
     * @values '' , link
     */
    type: {
      type: String,
      default: '',
    },
    /**
     * Активный класс, совпадения по включению
     */
    exact: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(newValue) {
        /**
         * Назначит активный таб
         * @event change
         * @property {string} newValue new value set
         */
        this.$emit('change', newValue)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
$tab-color: #999999;
$tab-active: $c-main;

label,
a {
  font-weight: 400;
  display: block;
  padding: 14px 30px;
  color: $tab-color;

  cursor: pointer;

  > input {
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }

  &:first-of-type {
    padding-left: 0;
    padding-right: 15px;
  }

  &.active,
  &.nuxt-link-active {
    color: $tab-active;
    font-weight: 600;
  }
  &.small {
    font-size: 16px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
  }
}
</style>
