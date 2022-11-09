<template>
  <div class="modal-wrapper">
    <div class="modal-container">
      <div class="modal-close" @click="close" />
      <!-- @slot контент -->
      <slot />
    </div>

    <div class="modal-mask" @click="close" />
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$modal.close()
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-wrapper {
  @include fixed(0, 0, 0, 0);
  @include size(100%);
  display: flex;
  justify-content: flex-end;
  z-index: 500;
}
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
.modal-container {
  background: #fff;
  box-shadow: 0px 0px 30px rgba(53, 56, 161, 0.07);
  z-index: 600;
  width: 63%;
  position: relative;
  overflow: auto;
  height: 100vh;
  padding: 52px 132px 40px 80px;
  animation: animModal 0.5s cubic-bezier(0.11, 0.72, 0.56, 1.28);
}
.modal-close {
  @include size(44px);
  @include bg('~assets/icons/close_popup.svg', center center/contain);
  margin-left: auto;
  transition: transform 0.5s ease;
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 132px;
  &:hover {
    transform: rotate(180deg);
  }
  &:active {
    transform: translateY(1px);
  }
}
.modal-mask {
  @include fixed(0, 0, 0, 0);
  @include size(100%);
  background: black;
  z-index: 500;
  opacity: 0.6;
  animation: animMask 0.5s;
}
@keyframes animMask {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.6;
  }
}
</style>
