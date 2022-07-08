<template>
  <div
    ref="select"
    class="select validate-me"
    :class="[
      {
        selected: !!selected.id,
        'is-required': required,
        'show-error': showError,
        'has-error': hasError,
        'has-focused': focused,
      },
      color,
    ]"
    :style="{ width: width, height: height }"
  >
    <span v-if="label" class="label">
      {{ label }}
    </span>
    <button
      type="button"
      :class="['select__head', !!selected.id && 'select__head--active']"
      @click="contentHandler()"
    >
      {{ selected.name ? selected.name : selected.id }}
      <div
        :class="['select-arrow-down', isOpen && 'select-arrow-down--active']"
      >
        <img src="~/assets/icons/arrowDown.svg" alt="#" />
      </div>
    </button>
    <transition name="fade">
      <div v-if="isOpen" class="select__content" :style="isOpen">
        <ul>
          <template v-for="option in options">
            <li :key="option.id">
              <button
                type="button"
                :class="[
                  'select__option',
                  option.id === selected.id && 'select__option--active',
                ]"
                @click="optionSelectHandler(option)"
              >
                {{ option.name ? option.name : option.id }}
              </button>
            </li>
          </template>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
/**
 * @displayName Select
 */
export default {
  name: 'Select',
  props: {
    model: {
      type: [String, Number, Object],
      default: null,
    },
    color: {
      type: String,
      default: '',
    },

    label: {
      type: String,
      default: '',
    },
    /**
     * Options array
     */
    options: {
      type: Array,
      required: true,
    },
    width: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: null,
    },
    /**
     * Placeholder when value is not selected
     */
    placeholder: {
      type: String,
      default: 'Select me',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      showError: false,
      focused: false,
    }
  },
  computed: {
    selected() {
      return {
        id: this.model ? this.model : 0,
        name: this.model ? this.getOptionName() : this.placeholder,
      }
    },
    hasError() {
      return !this.selected.id && this.required
    },
  },
  mounted() {
    document.addEventListener('click', (e) => {
      this.closeOusideHandler(e)
    })
  },
  destroyed() {
    document.removeEventListener('click', (e) => {
      this.closeOusideHandler(e)
    })
  },
  methods: {
    getOptionName() {
      const option = this.options.find((item) => item.id === this.model)
      return option ? option.name : this.placeholder
    },
    /**
     * Method to open or close content
     */
    contentHandler() {
      this.isOpen = !this.isOpen
      this.focused = true
    },
    /**
     * Method to close content on click outside of the component
     */
    closeOusideHandler(event) {
      if (
        !(
          this.$refs.select === event.target ||
          this.$refs.select?.contains(event.target)
        )
      ) {
        this.isOpen = false
        this.showError = this.focused
      }
    },
    /**
     * Method to select option
     */
    optionSelectHandler(option) {
      this.contentHandler()
      this.$emit('change', option.id)
    },
  },
}
</script>

<style lang="scss" scoped>
$select-main: #0084f4;
$select-text: #262728;
$select-grey: #e4e4e4;
$select-error: 1px solid rgba(255, 87, 110, 0.5);
$select-border: 1px solid blue;
.select {
  width: 100%;
  position: relative;

  &.has-error.show-error &__head {
    border: $select-error;
  }

  .label {
    font-size: 16px;
    margin: 0 0 10px 0;
    font-weight: 400;
    display: block;
    color: $select-grey;
  }
  button {
    appearance: none;
    text-align: left;
    outline: none;
  }

  &__head {
    width: 100%;
    height: 100%;
    padding: 15px 20px;
    overflow: hidden;
    background-color: transparent;
    position: relative;
    display: flex;
    align-items: center;
    font-size: rem(16);
    cursor: pointer;
    border-radius: 4px;
    text-overflow: ellipsis;
    word-wrap: break-word;
    border: $select-border;
    color: #999999;

    &--active {
      color: $select-text;
    }

    .select-arrow-down {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 50%;
      height: 100%;
      padding: 0 20px;
      transform: translateY(-50%);
      img {
        width: 13px;
      }

      &--active {
        transform: rotateX(180deg) translateY(50%) !important;
      }
    }
  }

  &__content {
    top: 100%;
    left: 0;
    display: block;
    width: 100%;
    max-height: 200px;
    background-color: $c-white;
    border-radius: 16px;
    overflow: auto;
    z-index: 10;
    margin-top: 6px;
    box-shadow: 0px 10px 30px rgba(138, 149, 158, 0.1);
    padding: 10px;
    position: absolute;

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-thumb {
      background: #a2acbe;
    }

    ul {
      margin: 0;
      padding: 0;
      li {
        position: relative;
        list-style: none;
        margin: 0;
        padding: 0;
      }
    }
  }

  &__option {
    box-sizing: border-box;
    padding: 10px 20px;
    width: 100%;
    text-align: left;
    background-color: transparent;
    border: none;
    color: $select-text;
    transition: 0.25s;
    cursor: pointer;
    border-radius: 10px;

    &:hover,
    &--active {
      color: $select-main;
      background: rgba(61, 99, 157, 0.2);
      letter-spacing: -0.3px;
    }
  }
}
.grey {
  background: #f6f6f6;
  border-radius: 10px;
}
</style>
