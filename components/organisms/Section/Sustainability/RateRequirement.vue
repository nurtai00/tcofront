<template>
  <div class="requirement">
    <div class="requirement__img">
      <AtomsHeading class="requirement__title-mobile" type="h3">
        {{ $t('suistainability.rateRequirement.title') }}
      </AtomsHeading>
      <div class="img">
        <img
          style="object-fit: cover"
          src="@/assets/img/sustainability/requirement/background.jpg"
          alt="bg"
        />
      </div>
    </div>

    <div class="container requirement__content">
      <AtomsHeading class="requirement__title-desktop" type="h3">
        {{ $t('suistainability.rateRequirement.title') }}
      </AtomsHeading>
      <div class="requirement__description">
        <p>
          {{ $t('suistainability.rateRequirement.description') }}
        </p>
        <ul>
          <li>
            {{ $t('suistainability.rateRequirement.list.one') }}
          </li>
          <li>
            {{ $t('suistainability.rateRequirement.list.two') }}
          </li>
          <li>
            {{ $t('suistainability.rateRequirement.list.three') }}
          </li>
          <li>
            {{ $t('suistainability.rateRequirement.list.four') }}
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
    min-width: 50%;
    padding: 80px calc((var(--width-container) - 100vw) / 2) 80px 60px;
  }
  &__img {
    display: flex;
    align-items: center;
    overflow: hidden;
    min-width: 50%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  &__title-mobile {
    display: none;
  }
  &__description {
    margin-top: 60px;
    font-weight: 400;
    font-family: Roboto, sans-serif;
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
