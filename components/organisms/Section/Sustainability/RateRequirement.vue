<template>
  <div class="requirement">
    <div class="requirement__img">
      <AtomsHeading class="requirement__title-mobile" type="h3">
        Совместная оценка потребностей
      </AtomsHeading>
      <img
        class="requirement__img"
        src="@/assets/img/sustainability/requirement/background.jpg"
        alt="bg"
      />
    </div>

    <div class="container requirement__content">
      <AtomsHeading class="requirement__title-desktop" type="h3">
        Совместная оценка потребностей
      </AtomsHeading>
      <div class="requirement__description">
        <p>
          Совместная оценка потребностей (СОП) – независимое исследование, целью
          которого является выявление наиболее важных социальных, экономических
          и экологических проблем или потребностей сообщества и изучение идей о
          том, как их решать. На основе СОП выявляются сферы, которые нуждаются
          в поддержке.
        </p>
        <ul>
          <li>
            Программа направлена на жителей Атырауской области и с. Боранкул,
            Мангистауской области
          </li>
          <li>
            Проекты основаны на бизнес-целях и результатах совместной оценки
            потребностей населения
          </li>
          <li>
            Прозрачный отбор проектов Советом по социальным инвестициям, в
            состав которого входят представители разных отделов ТШО
          </li>
          <li>
            Гранты предоставляют только некоммерческим организациям (не
            рассматриваются физические лица или коммерческие организации)
          </li>
        </ul>
        <AtomsPdfFile
          class="requirement__file"
          text="СОП"
          direction="row"
          :width="32"
          :height="32"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.requirement {
  background-color: #f2f6f7;
  display: flex;
  &__content {
    padding: 80px calc((100vw - var(--width-container)) / 2) 60px 80px;
    max-width: 50%;
  }
  &__img {
    img {
      max-width: 100%;
      height: 100%;
    }
  }
  &__title-mobile {
    display: none;
  }
  &__description {
    margin-top: 60px;
    p {
      font-size: 20px;
      line-height: 28px;
    }
    ul {
      margin: 20px 0 0 20px;
      li {
        font-size: 18px;
        color: $c-text;
        list-style: disc;
        &:not(:first-child) {
          margin-top: 10px;
        }
      }
    }
  }
  &__file {
    margin-top: 20px;
  }
  @include tablet {
    flex-direction: column;
    &__content {
      padding: 20px 16px;
      max-width: 100%;
    }
    &__img {
      position: relative;
    }
    &__title {
      &-mobile {
        display: block;
        position: absolute;
        top: 10%;
        left: 20px;
        color: white;
        z-index: 10;
      }
      &-desktop {
        display: none;
      }
    }
    &__description {
      margin-top: 0;
      p {
        font-size: 16px;
      }
      ul {
        margin-left: 0;
        li {
          list-style: none;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
