<template>
  <div class="assignments_career container">
    <AtomsHeading type="h3" color="main">
      {{ $t('career.block6_header') }}
    </AtomsHeading>
    <p>
      {{ $t('career.block6_description') }}
    </p>
    <div class="map">
      <img src="@/assets/img/career/map_career.png" alt="" class="map_back" />
      <img src="@/assets/img/career/blue.png" alt="" class="blue" />
      <img src="@/assets/img/career/yellow.png" alt="" class="yellow" />
      <img src="@/assets/img/career/golub.png" alt="" class="golub" />
      <img src="@/assets/img/career/thai.png" alt="" class="grey" />
      <img src="@/assets/img/career/aust.png" alt="" class="grey2" />
    </div>
    <div class="statistic">
      <div class="statistic_info">
        <p class="aust">
          {{ $t('career.Australia') }} – 0.03 %<br />
          3 {{ $t('career.employee') }}
        </p>
        <p class="us">
          {{ $t('career.USA') }} – 0.23 %<br />
          21 {{ $t('career.employee') }}
        </p>
      </div>
      <div class="statistic_info">
        <p class="uk">
          {{ $t('career.UK') }} – 0.37 %<br />
          34 {{ $t('career.employee') }}
        </p>
        <p class="kz" style="margin-top: 24px">
          {{ $t('career.KZ') }} – 99.35 %<br />
          9071 {{ $t('career.employee') }}
        </p>
      </div>
      <div class="statistic_info">
        <p class="thai">
          {{ $t('career.Tailand') }} – 0.01 %<br />
          1 {{ $t('career.employee') }}
        </p>
      </div>
      <div class="statistic_gender">
        <div class="blue statistic_gender-info">
          <img src="@/assets/img/career/muzh.png" alt="" />
          <div class="blue-text text">
            <span>Мужчины</span>
            <span>76%</span>
          </div>
        </div>
        <div class="purple statistic_gender-info">
          <img src="@/assets/img/career/zhen.png" alt="" />
          <div class="purple-text text">
            <span>Женщины</span>
            <span>24%</span>
          </div>
        </div>
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
  .grey,
  .grey2 {
    position: absolute;
    animation: pulse 2.5s linear infinite;
    @include tablet() {
      width: 20px;
    }
  }
  .blue {
    top: 34%;
    left: 15%;
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
    left: 71.9%;
  }
  .grey2 {
    top: 72.5%;
    left: 80.5%;
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
      p:last-of-type {
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
      p:last-of-type {
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
    &-info {
      width: 130px;
      height: 130px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          font-size: 16px;
          font-family: Roboto, sans-serif;
        }
      }
      .blue-text {
        color: $c-tco5;
      }
      .purple-text {
        color: #b24e8d;
      }
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
.kz {
  color: #00b0f0;
}
.uk {
  color: #ffc000;
}
.thai {
  color: #01bf89;
}
.aust {
  color: #b24e8d;
}
.us {
  color: #015467;
}
</style>
