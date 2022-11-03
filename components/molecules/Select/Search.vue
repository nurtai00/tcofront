<template>
  <div
    ref="select"
    class="select"
    :class="{ selected: !!selected.id }"
    :style="{ width: width }"
  >
    <span v-if="label" class="label">
      {{ label }}
    </span>
    <label
      :for="name"
      :class="['select__head', !!selected.id && 'select__head--active']"
    >
      <input
        :id="name"
        v-model="text"
        type="text"
        :name="name"
        autocomplete="off"
        @click="contentHandler"
      />
      {{ text }}
      <span v-if="!text" class="plc">{{ placeholder }}</span>
      <div :class="['select-arrow-down']">
        <!-- <img src="~/assets/icons/arrowDown.svg" alt="#" /> -->
      </div>
    </label>
    <transition name="fade">
      <div v-if="isOpen" class="select__content" :style="isOpen">
        <ul>
          <template v-for="option in getOptions">
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

    label: {
      type: [String, Number, Object],
      default: '',
    },
    name: {
      type: [String, Number, Object],
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
      default: '100%',
    },
    /**
     * Placeholder when value is not selected
     */
    placeholder: {
      type: String,
      default: 'Select me',
    },
  },
  data() {
    return {
      isOpen: false,
      text: this.model.name,
    }
  },
  computed: {
    selected() {
      return {
        id: this.model.id ?? 0,
        name: this.model.name ?? this.placeholder,
      }
    },
    getOptions() {
      return this.options.filter((a) => a.name.includes(this.text))
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
    /**
     * Method to open or close content
     */
    contentHandler() {
      this.isOpen = !this.isOpen
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
      }
    },
    /**
     * Method to select option
     */
    optionSelectHandler(option) {
      this.contentHandler()
      this.text = option.name
      this.$emit('change', option)
    },
  },
}
</script>

<style lang="scss" scoped>
.select {
  // min-width: 350px;
  width: 100%;
  position: relative;
  height: 50px;
  .label {
    font-size: 16px;
    margin: 0 0 10px 0;
    font-weight: 400;
    display: block;
    color: $c-grey;
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
    text-overflow: ellipsis;
    word-wrap: break-word;
    border-radius: 10px;
    border: 2px solid #e4e4e4;
    color: $c-grey;
    input {
      width: 0;
      height: 0;
      opacity: 0;
    }

    &--active {
      color: $c-text;
    }

    .select-arrow-down {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 10px;
      top: 50%;
      padding: 5px;
      transform: translateY(-50%);

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
    color: $c-text;
    transition: 0.25s;
    cursor: pointer;
    border-radius: 10px;

    &:hover,
    &--active {
      color: $c-main;
      background: rgba(61, 99, 157, 0.2);
      letter-spacing: -0.3px;
    }
  }
}
</style>
