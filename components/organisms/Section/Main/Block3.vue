<script>
export default {}
</script>

<template>
  <div>
    <section>
      <div class="container">
        <div class="tco__numbers">
          <div class="lines">
            <div class="section__title">
              <AtomsTitle class="atoms_title mb20" small>
                Отчет и цифры за 2021 г.
              </AtomsTitle>
              <a href="/projects#pbr">Подробнее</a>
            </div>
            <div class="line">
              <div>
                <span> 3,6 млрд (в долларах США) </span>
                <p>Затраты на товары и услуги казахстанских производителей</p>
              </div>
              <img src="@/assets/img/document-2.svg" alt="" />
            </div>
            <div class="line">
              <div>
                <span> 9 млрд (в долларах США) </span>
                <p>Прямые выплаты Республике Казахстан</p>
              </div>
              <img src="@/assets/img/barrels-2.svg" alt="" />
            </div>
            <div class="line">
              <div>
                <span> 26,6 млн (в тоннах) </span>
                <p>Производство сырой нефти</p>
              </div>
              <img src="@/assets/img/oil-pump-2.svg" alt="" />
            </div>
          </div>
          <div class="card">
            <img src="@/assets/img/Rectangle 27.png" />
            <p>
              ПБР-ПУУД, на котором уже зайдествовано более 35 тысяч
              казахстанцев, привнесет значительный вклад в развитие Республки
              Казахстан в следующие несколько лет.
            </p>
            <a href="/">
              Узнайте больше о вкладе ПБР-ПУУД в экономику Казахстана
            </a>
            <Nuxt-link to="" class="file">
              <img src="@/assets/img/pdf.svg" />
              Отчет о корпоративной ответственности за 2019-2020 гг
            </Nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.tco {
  &__numbers {
    display: flex;
    justify-content: space-between;
    gap: 25px;
    @media (max-width: 730px) {
      flex-direction: column;
    }
    .card {
      display: flex;
      flex-direction: column;
      width: 40%;
      @media (max-width: 730px) {
        width: 100%;
      }
      a {
        display: flex;
        gap: 15px;
        margin-top: 15px;
        text-decoration-line: underline;
        color: #00b0f0;
        img {
          width: 15px;
        }
      }
      a:last-child {
        color: #30454e;
      }
    }
    .lines {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 60%;
      @media (max-width: 730px) {
        width: 100%;
      }
      .line {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        background: #f2f6f7;
        border-radius: 4px;
        div {
          display: flex;
          flex-direction: column;
          span {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 32px;
            color: #015467;
          }
          p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 20px;
            color: #30454e;
          }
        }
      }
    }
  }
}
</style>
