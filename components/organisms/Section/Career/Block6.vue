<template>
  <div class="assignments_career container">
    <AtomsHeading type="h2" color="main">
      Работники ТШО на зарубежных назначениях и назначениях внутри Казахстана
    </AtomsHeading>
    <p>
      Работники ТШО имеют возможность работать в различных подразделениях
      корпорации «Шеврон» для прохождения временных зарубежных назначений и
      назначений внутри Казахстана с целью получения и применения новых знаний и
      усовершенствованных навыков в ТШО после возвращения.
    </p>
    <div class="map">
      <img src="@/assets/img/career/map.svg" alt="" class="map_back" />
      <img src="@/assets/img/career/blue.svg" alt="" class="blue" />
      <img src="@/assets/img/career/yellow.svg" alt="" class="yellow" />
      <img src="@/assets/img/career/golub.svg" alt="" class="golub" />
      <img src="@/assets/img/career/grey.svg" alt="" class="grey" />
    </div>
    <div class="statistic">
      <div>
        <p>
          США – 51,5 %<br />
          1000 работников
        </p>

        <p>
          Великобритания – 12,9 %<br />
          1000 работников
        </p>
      </div>
      <div>
        <p>
          Алматы – 32,2 %<br />
          1000 работников
        </p>
        <p>
          Тайланд – 3,2 %<br />
          1000 работников
        </p>
      </div>
      <img src="@/assets/img/career/muzh.png" alt="" />
      <img src="@/assets/img/career/zhen.png" alt="" />
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
  h2 {
    margin-bottom: 40px;
  }
}
.map {
  position: relative;
  width: 100%;
  margin-top: 18px;
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
    top: 23%;
    left: 63%;
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
  p {
    font-weight: 700;
    font-size: 24px;
  }
  div {
    width: 100%;
    max-width: 376px;
    &:first-of-type {
      p:first-of-type {
        color: #015467;
      }
      p:last-of-type {
        color: #ffc000;
        margin-top: 24px;
      }
    }
    &:last-of-type {
      p:first-of-type {
        color: #00b0f0;
      }
      p:last-of-type {
        color: #8c9fa6;
        margin-top: 24px;
      }
    }
  }
  img {
    margin-left: 35px;
  }
}
</style>
