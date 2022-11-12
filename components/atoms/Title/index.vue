<template>
  <div class="title">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="#00B0F0" />
    </svg>
    <AtomsHeading type="h1" color="main"><slot /></AtomsHeading>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  svg {
    margin-top: 14px;
    margin-right: 12px;
    @include tablet() {
      width: 10px;
      height: 10px;
      margin-top: 8px;
      margin-right: 8px;
    }
  }
  h1 {
    font-weight: 700;
    font-size: 56px;
    line-height: 64px;
    color: #015467;
    @include tablet() {
      font-size: 24px;
      line-height: 32px;
    }
  }
}
</style>
