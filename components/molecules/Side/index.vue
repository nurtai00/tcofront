<template>
  <transition v-if="isOpen" name="side">
    <div class="side">
      <div class="side__closing" @click="close" />
      <div class="side__content">
        <div class="side__content_header">
          <div class="side__content_number">{{ this.side.number }}</div>
          <div class="side__content_close" @click="close">
            <i class="icon-close" />
          </div>
        </div>
        <div class="side__content_name">{{ this.side.name }}</div>
        <div class="side__content_description">{{ this.side.description }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'side',
  computed: {
    isOpen() {
      return this.$store.state.side.open
    },
    side() {
      return this.$store.state.side.side
    }
  },
  methods: {
    close() {
      this.$store.commit('side/close')
    }
  }
}
</script>

<style lang="scss" scoped>
.side {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: .8s ease-in-out;

  &__closing {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    left: 0;
    right: 0;
    cursor: pointer;
    background-color: $c-tco1;
    transition: .8s ease-in-out;
    opacity: .9;
  }

  &__content {
    padding: 52px 80px;
    background-color: white;
    width: 65%;
    float: right;
    height: 100%;
    position: relative;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;

    &_header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      position: sticky;
      top: 30px;
    }

    &_number {
      color: rgba(1, 84, 103, 0.2);
      font-size: 28px;
      font-weight: 700;
    }

    &_close {
      font-size: 22px;
      color: #ccdde1;
      cursor: pointer;
    }

    &_name {
      color: $c-tco1;
      font-size: 48px;
      line-height: 56px;
      font-weight: 700;
      margin-bottom: 40px;
    }

    &_description {
      font-size: 20px;
      line-height: 28px;
      color: $c-tco1;
      user-modify: read-write-plaintext-only;
      -webkit-user-modify: read-write-plaintext-only;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}

.side-enter-active, .side-leave-active {
  transform: translateX(100%);
}
</style>
