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
        <div v-if="this.side.description" class="side__content_description">{{ this.side.description }}</div>
        <div v-else v-html="this.side.html" />
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
      padding-top: 30px;
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

  @include wide-tablet {
    &__content {
      width: 80%;
    }
  }

  @include phone {
    &__content {
      width: 90%;
      padding: 20px 16px;

      &_header {
        top: 20px;
      }

      &_number {
        font-size: 18px;
      }

      &_close {
        font-size: 12px;
      }

      &_name {
        font-size: 22px;
        line-height: 28px;
        margin-bottom: 12px;
      }

      &_description {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
}

.side-enter-active, .side-leave-active {
  transform: translateX(100%);
}

.side::v-deep {
  .abs {
    margin-bottom: 40px;
  }

  ul {
    padding-left: 22px;
    margin-bottom: 20px;

    li {
      list-style-type: disc;
      font-size: 20px;
      line-height: 28px;
      color: $c-tco1;
    }
  }

  p {
    margin-bottom: 12px;

    &.title {
      font-size: 28px;
      line-height: 32px;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }

  @include phone {
    .abs {
      margin-bottom: 20px;
    }

    p, ul li {
      font-size: 16px;
      line-height: 20px;
    }

    p.title {
      font-size: 18px;
      line-height: 24px;
    }
  }
}
</style>
