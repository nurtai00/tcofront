<template>
  <div class="vacancy">
    <div class="container">
      <AtomsHeading type="h3"> {{ $t('vacancy.block_4.title') }} </AtomsHeading>
      <div class="content">
        <div>
          <p v-html="$t('vacancy.block_4.text')"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {},
}
</script>
<style lang="scss" scoped>
.vacancy {
  background-color: #f2f6f7;
  margin-top: 80px;
  padding: 80px 0;
  @include tablet() {
    margin-top: 40px;
    padding: 40px 0;
  }
  h3 {
    text-align: center;
    @include tablet() {
      width: max-content;
    }
  }
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  @include tablet() {
    flex-direction: column-reverse;
    justify-content: flex-start;
    margin-top: 20px;
  }
  div {
    width: 100%;
    margin-right: 20px;
    @include tablet() {
      max-width: 100%;
      margin-right: 0;
      margin-top: 20px;
      p {
        font-size: 16px;
        line-height: 20px;
      }
    }
    button {
      display: flex;
      align-items: center;
      border: none;
      outline: none;
      padding: 0;
      background-color: transparent;
      margin-top: 40px;
      cursor: pointer;
      @include tablet() {
        margin-top: 20px;
      }
      p {
        text-decoration-line: underline;
        color: #00b0f0;
        margin-right: 12px;
        @include tablet() {
          font-size: 16px;
          line-height: 22px;
          text-decoration-line: unset;
        }
      }
      svg {
        transition: transform 0.3s ease;
      }
      &:hover {
        svg {
          transform: translateX(10px);
        }
      }
    }
  }
  img {
    width: 100%;
    max-width: 588px;
    height: auto;
    object-fit: contain;
    @include wide-tablet() {
      max-width: 350px;
    }
    @include tablet() {
      max-width: 100%;
    }
  }
}
</style>
