<template>
  <div class="vacancy__offer">
    <div class="container">
      <div class="vacancy__offer-wrapper">
        <AtomsHeading type="h3">
          Мошенничество при найме на работу
        </AtomsHeading>
        <div class="vacancy__offer-content content">
          <div class="content__left">
            <p>
              Мошенничество при найме на работу может быть в виде различных
              информационных ресурсов таких, как электронные сообщения, SMS
              сообщения или письма, поступающие от имени лиц/групп, которые
              якобы представляют компанию «Тенгизшевройл». Не отправляйте деньги
              и не передавайте личные данные лицам, предлагающим работу в
              компании «Тенгизшевройл». Если вы подали заявку на вакансию через
              сайт компании ТШО, мы будем располагать всей необходимой
              информацией.
            </p>
            <button @click="showModal">
              Подробнее
              <svg
                width="24"
                height="24"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  transform="rotate(-180 20 20)"
                  fill="#00b0f0"
                />
                <path
                  d="M17 12.5L24.5 20L17 27.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <img src="@/assets/img/vacancy/block2.jpg" alt="block2" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    showModal() {
      this.$modal.add({
        title: 'ListPopup',
        payload: {
          title:
            'Если вы не уверены в подлинности полученного сообщения, то, пожалуйста, примите во внимание нижеследующую информацию:',
          list: [
            {
              id: 1,
              text: 'ТШО никогда не делает предложение о работе без проведения официального собеседования',
            },
            {
              id: 2,
              text: '<span>Компания Тенгизшевройл никогда не требует денег или плату любого вида в процессе отбора и найма</span>',
            },
            {
              id: 3,
              text: '<span> Адрес веб-страниц компании Тенгизшевройл всегда содержит: <a href="#">http://www.tengizchevroil.com</a></span>',
            },
            {
              id: 4,
              text: '<span> Проверяйте адреса электронной почты. Адреса электронной почты компании «Тенгизшевройл» должны заканчиваться на "@tengizchevroil.com"</span>',
            },
          ],
          subtitle:
            'При возникновении каких-либо сомнений в подлинности полученного сообщения, пожалуйста, <a href="#">обратитесь в Горячую линию ТШО</a>.',
        },
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.vacancy {
  &__offer {
    margin-top: 80px;
    background-color: #f2f6f7;
    padding: 80px 0;
    @include phone() {
      padding: 40px 0;
    }
    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &-content {
      margin-top: 40px;
      display: flex;
      gap: 40px;
      @include phone() {
        gap: 0;
      }
    }
  }
}
.content {
  @include wide-tablet() {
    flex-direction: column-reverse;
  }
  &__left {
    flex-basis: 50%;
    @include phone() {
      margin-top: 20px;
      padding: 0 16px;
    }
    p {
      font-size: 20px;
      color: $c-text;
    }
    button {
      margin-top: 40px;
      background-color: transparent;
      border: none;
      color: $c-base;
      font-size: 20px;
      font-weight: 500;
      font-family: Roboto, sans-serif;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      svg {
        transition: transform 0.3s ease;
      }
      &:hover {
        svg {
          transform: translateX(10px);
        }
      }
    }
  }
  img {
    flex-basis: 50%;
    width: 100%;
    height: 100%;
    @include phone() {
      width: 100vw;
    }
  }
}
</style>
