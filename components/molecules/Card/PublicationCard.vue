<template>
  <div class="p_card">
    <img
      loading="lazy"
      src="@/assets/img/publication_card.png"
      alt="publication_card"
    />
    <div>
      <img
        loading="lazy"
        src="@/assets/icons/pdf.svg"
        alt="pdf"
        width="21"
        height="28"
      />
      <p>Отчет о корпоративной ответственности за 2019-20 гг</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.p_card {
  img {
    width: 100%;
  }
  div {
    display: grid;
    grid-template-columns: 21px 1fr;
    margin-top: 12px;
    p {
      font-family: 'Roboto', sans-serif;
      padding-left: 12px;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #30454e;
      margin: 0px;
      @media (orientation: portrait) {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
}
</style>
