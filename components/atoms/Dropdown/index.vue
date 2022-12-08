<template>
  <div ref="dropdown" class="dropdown">
    <button class="dropdown__button" type="button">
      <span class="dropdown__text">{{ title }}</span>
      <!-- <AtomsIcon icon="dropdown-arrow" :size="14" /> -->
    </button>
    <ul class="dropdown-menu menu">
      <li v-for="(item, key) in links" :key="key" class="dropdown-menu__item">
        <nuxt-link :to="localePath(item.link)">
          <i
            v-if="item.icon"
            :class="`icon-${item.icon} dropdown-menu__icon`"
          />
          <span class="dropdown-menu__text">{{ item.title }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
/**
 * ATOMS/Dropdown
 * @displayName Dropdown
 */
export default {
  name: 'Dropdown',
  props: {
    /**
     * Загаловок dropdown
     */
    title: {
      type: String,
      required: true,
    },
    /**
     * Список пунктов меню
     * @type {Array}
     * @format [{
     *  title: String,
     *  link: String,
     *  icon: String (optional),
     *  }, ...]
     */
    links: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    document.addEventListener('click', this.closeOutsideHandler)
  },
  destroyed() {
    document.removeEventListener('click', this.closeOutsideHandler)
  },
  methods: {
    closeOutsideHandler(event) {
      if (
        !(
          this.$refs.dropdown === event.target ||
          this.$refs.dropdown?.contains(event.target)
        )
      ) {
        this.$refs.dropdown.classList.remove('open')
      } else {
        this.$refs.dropdown.classList.add('open')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$dropdown-text: #333;
$dropdown-line: #ccc;
$dropdown-not-active: #ccc;
$dropdown-background: #000;

.dropdown {
  display: inline-block;

  &__button {
    height: inherit;
    display: block;
    align-items: center;
    padding: 0 20px;
    color: $dropdown-text;
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
  }

  &__text {
    margin-right: 8px;
  }

  &-menu {
    z-index: 99;
    position: absolute;
    display: none;
    border: 1px solid $dropdown-line;
    border-radius: 0 0 10px 10px;

    &__item {
      padding: 15px 20px 0;
      cursor: pointer;

      a {
        color: $dropdown-not-active;
      }

      &:last-child {
        padding-bottom: 15px;
      }
    }

    &__icon {
      margin-right: 9px;
    }
  }

  &.open {
    .menu {
      display: block;
      z-index: 1;
    }
  }
}
</style>
