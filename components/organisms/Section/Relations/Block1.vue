<template>
  <div class="connect">
    <div class="container">
      <AtomsHeading type="h3">
        Связь с внешними кредиторами ПБР-ПУУД
      </AtomsHeading>
      <div class="connect_content">
        <div>
          <p>
            В июле 2016 г. Партнеры объявили о согласовании окончательного
            решения по финансированию Проекта будущего расширения – Проекта
            управления устьевым давлением (ПБР-ПУУД), что представляет собой
            следующий этап крупного расширения добычи и производства на
            Тенгизском месторождении нефти.
          </p>
          <p>
            В рамках проекта ПБР-ПУУД нам важно сохранять прозрачную
            двустороннюю связь с нашими кредиторами. ТШО внедряет полноценные
            отношения с кредиторами, чтобы гарантировать, что заинтересованные
            стороны будут иметь постоянные возможности задавать вопросы,
            комментировать и предоставлять обратную связь.
          </p>
          <p>
            Наша цель - поддерживать открытый диалог с нашей базой кредиторов и
            своевременно реагировать на вопросы. Помимо предоставления
            информации, которая содержится под закладкой <a href="/company">Компания</a>, мы будем рады
            помочь вам, оперативно предоставив ответы на ваши вопросы.
          </p>
        </div>
        <img src="@/assets/img/relations/factory.svg" alt="factory" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.connect {
  background: #f2f6f7;
  padding: 40px 0 80px;
  @include tablet() {
    padding: 20px 0 40px;
  }
  .container {
    flex-direction: column;
  }
  h3 {
    max-width: 776px;
    color: #30454e;
    margin-bottom: 40px;
    @include tablet() {
      margin-bottom: 20px;
    }
  }
  &_content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @include tablet() {
      flex-direction: column-reverse;
      justify-content: flex-start;
    }
    div {
      p {
        max-width: 776px;
        margin-bottom: 12px;
        &:last-child {
          margin-bottom: 0;
        }
        @include tablet() {
          font-size: 16px;
          line-height: 20px;
        }
      }
    }

    img {
      margin-top: -132px;
      @include tablet() {
        width: 250.0436553955078px;
        height: 217px;
        margin: 0 auto;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
