<template>
  <div class="tog">
    <span> {{ !active ? label[0] : label[1] }} </span>
    <button :class="['btn', active && 'toggle']" @click.stop.prevent="toggle">
      <div :class="['circle', active && 'toggle']"></div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      active: false,
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    },
  },
}
</script>

<style lang="scss" scoped>
$toggle-color: #0084f4;
$toggle-back: #00c48c;

.tog {
  display: flex;
  align-items: center;
}
span {
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.3px;
  color: $toggle-color;
  margin: 0px 12px;
}
.btn {
  display: block;
  width: 51px;
  height: 31px;
  background-color: $toggle-back;
  border-radius: 15px;
  position: relative;
  border: none;
  cursor: pointer;
  transition: 0.25s ease-in-out;
}

.circle {
  display: block;
  width: 27px;
  height: 27px;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  transition: 0.25s ease-in-out;
}

.toggle.btn {
  background: rgba(120, 120, 128, 0.32);
}

.toggle.circle {
  left: 100%;
  transform: translate(calc(-100% - 2px), -50%);
  border: 0.5px solid rgba(0, 0, 0, 0.04);
}
</style>
