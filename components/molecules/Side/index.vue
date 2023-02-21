<template>
  <div v-if="isOpen" class="side">
    <div class="side__closing" @click="close" />
    <div class="side__content">
      <div class="side__content_header">
        <div class="side__content_number">{{ side.number }}</div>
        <div class="side__content_close" @click="close">
          <img class="close" src="@/assets/icons/close.png" @click="close" />
        </div>
      </div>
      <div class="side__content_name">{{ side.name }}</div>
      <div v-if="side.description" class="side__content_description">
        {{ side.description }}
      </div>
      <div v-else v-html="side.html" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Side',
  computed: {
    isOpen() {
      return this.$store.state.side.open
    },
    side() {
      return this.$store.state.side.side
    },
  },
  methods: {
    close() {
      this.$store.commit('side/close')
    },
  },
}
</script>

<style lang="scss" scoped>
.side {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  animation: animModal 0.5s cubic-bezier(0.11, 0.72, 0.56, 1.28);
  @keyframes animModal {
    from {
      transform: translateX(20px);
      opacity: 0;
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  &__closing {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    left: 0;
    right: 0;
    cursor: pointer;
    background-color: $c-tco1;
    transition: 0.8s ease-in-out;
    opacity: 0.9;
  }

  &__content {
    padding: 52px 132px 52px 80px;
    background-color: white;
    width: 63%;
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
      img.close {
        margin-bottom: 0;
      }
      transition: transform 0.5s ease;
      &:hover {
        transform: rotate(180deg);
      }
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
      white-space: pre-line;

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

.side::v-deep {
  .abs {
    margin-bottom: 40px;
  }

  ul {
    padding-left: 22px;
    margin-bottom: 20px;

    li {
      font-family: 'Roboto';
      font-style: normal;
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

  img {
    margin-bottom: 40px;
  }

  @include phone {
    .abs {
      margin-bottom: 20px;
    }

    p,
    ul li {
      font-size: 16px;
      line-height: 20px;
    }

    p.title {
      font-size: 18px;
      line-height: 24px;
    }

    img {
      margin-bottom: 20px;
    }
  }
}
</style>
