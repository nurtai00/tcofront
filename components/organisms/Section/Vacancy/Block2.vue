<template>
  <div class="vacancy">
    <div class="container">
      <AtomsHeading type="h3"> Мошенничество при найме на работу </AtomsHeading>
      <div class="content">
        <div>
          <p>
            Мошенничество при найме на работу может быть в виде различных
            информационных ресурсов таких, как электронные сообщения, SMS
            сообщения или письма, поступающие от имени лиц/групп, которые якобы
            представляют компанию «Тенгизшевройл». Не отправляйте деньги и не
            передавайте личные данные лицам, предлагающим работу в компании
            «Тенгизшевройл». Если вы подали заявку на вакансию через сайт
            компании ТШО, мы будем располагать всей необходимой информацией.
          </p>
          <button @click="showModal">
            <p>Подробнее</p>
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
  background-color: #f2f6f7;
  margin-top: 80px;
  padding: 80px 0;
  @include tablet() {
    margin-top: 40px;
    padding: 40px 0;
  }
  h3 {
    text-align: center;
    @include tablet() {
      width: max-content;
    }
  }
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  @include tablet() {
    flex-direction: column-reverse;
    justify-content: flex-start;
    margin-top: 20px;
  }
  div {
    width: 100%;
    max-width: 548px;
    margin-right: 20px;
    @include tablet() {
      max-width: 100%;
      margin-right: 0;
      margin-top: 20px;
      p {
        font-size: 16px;
        line-height: 20px;
      }
    }
    button {
      display: flex;
      align-items: center;
      border: none;
      outline: none;
      padding: 0;
      background-color: transparent;
      margin-top: 40px;
      cursor: pointer;
      @include tablet() {
        margin-top: 20px;
      }
      p {
        text-decoration-line: underline;
        color: #00b0f0;
        margin-right: 12px;
        @include tablet() {
          font-size: 16px;
          line-height: 22px;
          text-decoration-line: unset;
        }
      }
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
    width: 100%;
    max-width: 588px;
    height: auto;
    object-fit: contain;
    @include wide-tablet() {
      max-width: 350px;
    }
    @include tablet() {
      max-width: 100%;
    }
  }
}
</style>
