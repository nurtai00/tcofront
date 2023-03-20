<script>
export default {}
</script>

<template>
  <div class="organismsSectionMainBlock32">
    <section style="padding: 80px 0 90px">
      <div class="container">
        <div class="tco__numbers">
          <div class="lines">
            <div class="section__title">
              <AtomsTitle class="atoms_title mb20" small>
                {{ $t('home.block_3.title') }}
              </AtomsTitle>
              <AtomsTitle class="atoms_title mb20 mobile" small>
                {{ $t('home.block_3.title_mobile_2') }}
              </AtomsTitle>
              <nuxt-link :to="localePath('/about/figures')" class="mb20">
                {{ $t('home.block_3.link') }}
              </nuxt-link>
            </div>
            <div class="line">
              <div>
                <span> {{ $t('home.block_3.items[0].title') }} </span>
                <p>{{ $t('home.block_3.items[0].text') }}</p>
              </div>
              <img src="@/assets/img/document-2.png" alt="" />
            </div>
            <div class="line">
              <div>
                <span> {{ $t('home.block_3.items[1].title') }} </span>
                <p>{{ $t('home.block_3.items[1].text') }}</p>
              </div>
              <img src="@/assets/img/barrels-2.png" alt="" />
            </div>
            <div class="line">
              <div>
                <span>{{ $t('home.block_3.items[2].title') }}</span>
                <p>{{ $t('home.block_3.items[2].text') }}</p>
              </div>
              <img src="@/assets/img/oil-pump-2.png" alt="" />
            </div>
          </div>
          <div class="card">
            <img src="@/assets/img/Rectangle 27.png" class="card__image" />
            <p>
              {{ $t('home.block_3.right.text') }}
            </p>
            <a href="/" style="font-family: Roboto, sans-serif">
              {{ $t('home.block_3.right.link_1') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
%card-text-style {
  font-size: 18px;
  line-height: 20px;
  @media (max-width: 730px) {
    font-size: 16px;
    line-height: 20px;
  }
}
.tco {
  &__numbers {
    display: flex;
    justify-content: space-between;
    gap: 36px;
    @media (max-width: 730px) {
      flex-direction: column;
    }
    .card {
      display: flex;
      flex-direction: column;
      width: 40%;
      row-gap: 12px;
      @media (max-width: 730px) {
        width: 100%;
      }
      &__image {
        aspect-ratio: 1.9/1;
        object-fit: cover;
        flex: 1;
      }
      p {
        @extend %card-text-style;
        font-weight: 500;
      }
      a {
        @extend %card-text-style;
        display: flex;
        gap: 12px;
        text-decoration-line: underline;
        color: #00b0f0 !important;
        img {
          width: 30px;
        }
      }
      a:last-child {
        margin-top: 15px;
        color: #30454e !important;
      }
    }
    .lines {
      display: flex;
      flex-direction: column;
      gap: 20px;
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
          row-gap: 12px;
          span {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 32px;
            color: #015467;
            @media (orientation: portrait) {
              font-size: 18px;
              line-height: 24px;
            }
          }
          p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            line-height: 20px;
            color: #30454e;
            @media (orientation: portrait) {
              font-size: 14px;
              line-height: 18px;
            }
          }
        }
      }
    }
  }
}
.organismsSectionMainBlock32 {
  display: none;
  @media (orientation: portrait) {
    display: block;
    .atoms_title {
      display: none;
    }
    .mobile {
      display: flex !important;
    }
  }
  .mobile {
    display: none;
  }
}
</style>
