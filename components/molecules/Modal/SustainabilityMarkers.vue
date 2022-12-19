<template>
  <div class="work">
    <img
      class="work__img"
      src="@/assets/img/sustainability/work-places/popup-bg.jpg"
      alt=""
    />
    <div class="work__content container">
      <AtomsHeading type="h3" color="black">
        {{ payload.title }}
      </AtomsHeading>
      <ul class="work__ul">
        <li v-for="(list, index) of payload.list" :key="index + list">
          <span>{{ list }}</span>
        </li>
      </ul>
      <div class="work__icon">
        <svg v-if="payload.color === 'blue'" width="23" height="32" viewBox="0 0 23 32" fill="none">
          <path
            d="M11.7124 0.0458984C5.60316 0.0458984 0.632812 5.01625 0.632812 11.1255C0.632812 18.8042 11.7233 31.9209 11.7233 31.9209C11.7233 31.9209 22.792 18.4265 22.792 11.1255C22.792 5.01625 17.8218 0.0458984 11.7124 0.0458984ZM15.0554 14.3696C14.1336 15.2912 12.9231 15.7521 11.7124 15.7521C10.5019 15.7521 9.29105 15.2912 8.36966 14.3696C6.5263 12.5264 6.5263 9.52727 8.36966 7.68391C9.26225 6.79093 10.4496 6.29911 11.7124 6.29911C12.9752 6.29911 14.1624 6.79113 15.0554 7.68391C16.8987 9.52727 16.8987 12.5264 15.0554 14.3696Z"
            fill="#44D0F7"
          />
        </svg>
        <svg v-else-if="payload.color === 'yellow'" width="23" height="32" viewBox="0 0 23 32" fill="none">
          <path
            d="M11.7124 0.0458984C5.60316 0.0458984 0.632812 5.01625 0.632812 11.1255C0.632812 18.8042 11.7233 31.9209 11.7233 31.9209C11.7233 31.9209 22.792 18.4265 22.792 11.1255C22.792 5.01625 17.8218 0.0458984 11.7124 0.0458984ZM15.0554 14.3696C14.1336 15.2912 12.9231 15.7521 11.7124 15.7521C10.5019 15.7521 9.29105 15.2912 8.36966 14.3696C6.5263 12.5264 6.5263 9.52727 8.36966 7.68391C9.26225 6.79093 10.4496 6.29911 11.7124 6.29911C12.9752 6.29911 14.1624 6.79113 15.0554 7.68391C16.8987 9.52727 16.8987 12.5264 15.0554 14.3696Z"
            fill="#FFC000"
          />
        </svg>
        <svg v-else width="23" height="32" viewBox="0 0 23 32" fill="none">
          <path
            d="M11.7124 0.0458984C5.60316 0.0458984 0.632812 5.01625 0.632812 11.1255C0.632812 18.8042 11.7233 31.9209 11.7233 31.9209C11.7233 31.9209 22.792 18.4265 22.792 11.1255C22.792 5.01625 17.8218 0.0458984 11.7124 0.0458984ZM15.0554 14.3696C14.1336 15.2912 12.9231 15.7521 11.7124 15.7521C10.5019 15.7521 9.29105 15.2912 8.36966 14.3696C6.5263 12.5264 6.5263 9.52727 8.36966 7.68391C9.26225 6.79093 10.4496 6.29911 11.7124 6.29911C12.9752 6.29911 14.1624 6.79113 15.0554 7.68391C16.8987 9.52727 16.8987 12.5264 15.0554 14.3696Z"
            fill="#015467"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    payload: {
      type: Object,
      required: true,
    },
  },
}
</script>
  <style lang="scss" scoped>
  .work {
    height: 100%;
    position: relative;
    &__img {
      width: 100%;
      border-radius: 4px;
    }
    &__content {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      p {
        display: block;
        margin-top: 20px;
        font-size: 20px;
      }
    }
    &__ul {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: #30454E;
      margin-left: 20px;
      @media (max-width: 780px) {
        font-size: 16px;
        line-height: 22px;
      }
      li {
        list-style: disc;
        font-size: 20px;
        color: #30454e;
      }

    }
    &__icon {
      position: absolute;
      bottom: 0;
      right: 0;
      > svg {
        width: 150px;
        height: 150px;
      }
    }
    @include phone {
      &__content {
        margin-top: 20px;
        p {
          font-size: 16px;
        }
      }
    }
  }
</style>
