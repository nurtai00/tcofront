<template>
  <div class="about_career">
    <div class="container">
      <AtomsHeading type="h3" color="main">
        Стратегическое планирование персонала
      </AtomsHeading>
      <div class="statistic">
        <div
          v-for="(item, idx) in statistics"
          :key="idx"
          class="statistic_block"
        >
          <img :src="item.img" alt="" />
          <AtomsHeading type="h3" color="main"> {{ item.title }}</AtomsHeading>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statistics: [
        {
          img: require('@/assets/icons/statistic1.svg'),
          title: '50%',
          text: 'Доля штатных казахстанских работников в 1993 г.',
        },
        {
          img: require('@/assets/icons/statistic2.svg'),
          title: '93,9%',
          text: 'Доля штатных казахстанских работников, без учета персонала ПБР-ПУУД',
        },
        {
          img: require('@/assets/icons/statistic3.svg'),
          title: '88,5%',
          text: 'Общая доля казахстанских работников на данный момент',
        },
        {
          img: require('@/assets/icons/statistic4.svg'),
          title: '77,3%',
          text: 'Доля казахстанцев на руководящих постах от общего числа руководящего состава',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.about_career {
  width: 100%;
  padding: 80px 0;
  background: #f2f6f7;
  h3 {
    margin-bottom: 40px;
  }
}
.statistic {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 24px;
  &_block {
    display: flex;
    flex-direction: column;
    padding: 30px;
    background: #ffffff;
    box-shadow: 0px 6px 30px rgba(48, 69, 78, 0.1);
    border-radius: 4px;
    img {
      width: 80px;
      height: 80px;
    }
    h3 {
      margin: 20px 0;
    }
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: #30454e;
    }
  }
}
</style>
