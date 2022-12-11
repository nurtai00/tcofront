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
                {{ $t('home.block_3.title') }}
              </AtomsTitle>
              <a href="/projects#pbr" class="mb20">{{ $t('home.block_3.link') }}</a>
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
            <img src="@/assets/img/Rectangle 27.png" />
            <p>
              {{ $t('home.block_3.right.text') }}
            </p>
            <a href="/">
              {{ $t('home.block_3.right.link_1') }}
            </a>
            <nuxt-link :to="localePath('/')" class="file">
              <img width="24" height="24" src="@/assets/img/pdf.png" />
              {{ $t('home.block_3.right.link_2') }}
            </nuxt-link>
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
