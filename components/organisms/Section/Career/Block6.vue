<template>
  <div class="assignments_career container">
    <AtomsHeading type="h3" color="main">
      {{ $t('career.block6_header') }}
    </AtomsHeading>
    <p>
      {{ $t('career.block6_description') }}
    </p>
    <div class="map">
      <img src="@/assets/img/career/map.png" alt="" class="map_back" />
      <img src="@/assets/img/career/blue.png" alt="" class="blue" />
      <img src="@/assets/img/career/yellow.png" alt="" class="yellow" />
      <img src="@/assets/img/career/golub.png" alt="" class="golub" />
      <img src="@/assets/img/career/grey.png" alt="" class="grey" />
    </div>
    <div class="statistic">
      <div class="statistic_info">
        <p>
          {{ $t('career.USA') }} – 51,5 %<br />
          1000 {{ $t('career.employee') }}
        </p>
        <p>
          {{ $t('career.UK') }} – 12,9 %<br />
          1000 {{ $t('career.employee') }}
        </p>
      </div>
      <div class="statistic_info">
        <p>
          {{ $t('career.KZ') }} – 32,2 %<br />
          1000 {{ $t('career.employee') }}
        </p>
        <p>
          {{ $t('career.Tailand') }} – 3,2 %<br />
          1000 {{ $t('career.employee') }}
        </p>
      </div>
      <div class="statistic_gender">
        <img src="@/assets/img/career/muzh.png" alt="" />
        <img src="@/assets/img/career/zhen.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.assignments_career {
  width: 100%;
  padding: 80px 0;
  @include tablet() {
    padding: 40px 0;
    p {
      font-size: 16px;
      line-height: 22px;
    }
  }
  @include phone() {
    padding: 40px 16px;
  }
  h3 {
    margin-bottom: 40px;
    @include tablet() {
      margin-bottom: 20px;
    }
  }
}
.map {
  position: relative;
  width: 100%;
  margin-top: 20px;
  &_back {
    width: 100%;
    height: auto;
  }
  .blue,
  .yellow,
  .golub,
  .grey {
    position: absolute;
    animation: pulse 2.5s linear infinite;
    @include tablet() {
      width: 20px;
    }
  }
  .blue {
    top: 34%;
    left: 20%;
  }
  .yellow {
    top: 28.5%;
    left: 45%;
  }
  .golub {
    top: 31%;
    left: 64%;
  }
  .grey {
    top: 49.5%;
    left: 75.5%;
  }
}
@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
.statistic {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: -100px;
  z-index: 111;
  @include tablet() {
    flex-direction: column;
    margin-top: 0;
  }
  p {
    font-weight: 700;
    font-size: 24px;
    @include tablet() {
      font-size: 16px;
      line-height: 22px;
    }
  }
  &_info {
    width: 100%;
    max-width: 376px;
    @include tablet() {
      max-width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    &:first-of-type {
      @include tablet() {
        order: 0;
        margin-bottom: 20px;
      }
      p:first-of-type {
        color: #015467;
      }
      p:last-of-type {
        color: #ffc000;
        margin-top: 24px;
        @include tablet() {
          margin-top: 0px;
        }
      }
    }
    &:nth-last-child(2) {
      @include tablet() {
        order: 1;
      }
      p:first-of-type {
        color: #00b0f0;
      }
      p:last-of-type {
        color: #8c9fa6;
        margin-top: 24px;
        @include tablet() {
          margin-top: 0px;
        }
      }
    }
  }
  &_gender {
    display: flex;
    flex-direction: row;
    @include tablet() {
      order: -1;
      margin-bottom: 20px;
    }
    img {
      width: 130px;
      height: 130px;
      @include tablet() {
        width: 83px;
        height: 83px;
      }
      &:last-child {
        margin-left: 73px;
        @include tablet() {
          margin-left: 93px;
        }
      }
    }
  }
}
</style>
