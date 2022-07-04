<template>
  <div ref="tab" :class="['tabs', size]">
    <AtomsTab
      v-for="(item, id) in tabs"
      :key="id"
      v-model="model"
      :name="item.name"
      :size="size"
      :type="type"
      :exact="exact"
      @change="changeTab"
    >
      {{ item.value }}
    </AtomsTab>
    <!-- Анимированный нижний бордер -->
    <div class="border" :style="{ width: width + 'px', left: left + 'px' }" />
  </div>
</template>

<script>
/**
 * Табы в линию
 * @displayName TabsLine
 */
export default {
  name: 'TabsLine',
  model: {
    prop: 'tab',
    event: 'change',
  },
  props: {
    /**
     * Объект табов, ключ - наименования таба, значение описание таба
     */
    tabs: {
      type: [Object, Array],
      default: () => ({}),
    },
    /**
     * @model
     */
    tab: {
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
      validator: (value) => {
        return ['', 'link'].includes(value)
      },
    },
    /**
     * Активный класс, совпадения по включению
     */
    exact: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      width: 0,
      left: 0,
    }
  },
  computed: {
    model: {
      get() {
        return this.tab
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
  watch: {
    tab() {
      setTimeout(() => {
        this.animationBorder()
      }, 0)
    },
    '$route.name'() {
      if (this.type === 'link') {
        setTimeout(() => {
          this.animationBorder()
        }, 0)
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.animationBorder()
    }, 200)

    window.onresize = this.animationBorder
  },
  unmounted() {
    window.onresize = null
  },
  methods: {
    /**
     * при переключение таба, анимирует нижнюю линию
     */
    animationBorder() {
      const activeTab =
        this.$el.querySelector('label.active') ||
        this.$el.querySelector('a.nuxt-link-active')

      if (activeTab) {
        this.width = activeTab.offsetWidth
        this.left = activeTab.offsetLeft
      } else {
        const firstTab =
          this.$el.querySelector('label') || this.$el.querySelector('a')

        if (firstTab) {
          this.width = firstTab.offsetWidth
          this.left = firstTab.offsetLeft
        }
      }
    },
    /**
     * Переключает бордер у ссылок
     */
    changeTab() {
      this.animationBorder()
    },
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  display: inline-flex;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(138, 149, 158, 0.1);
  padding: 0 30px;

  .border {
    position: absolute;
    height: 0;
    border-bottom: 2px solid $c-main;
    bottom: 11px;
    transition: width 0.5s cubic-bezier(0.91, 0.24, 0.14, 0.93),
      left 0.5s cubic-bezier(0.91, 0.24, 0.14, 0.93);
  }
  &.small {
    justify-content: space-between;
    display: flex;
  }
}
</style>
