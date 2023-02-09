<template>
  <div class="contact__office">
    <div class="container">
      <div class="contact__office-info">
        <div class="contact__office-info content">
          <AtomsHeading type="h3" color="black">
            {{ content.title }}
          </AtomsHeading>
          <ul class="content__list list">
            <li v-for="list of content.lists" :key="list.id" class="list__item">
              <div v-if="!!list.iconName" class="list__item withIcon">
                <img
                  :src="require(`~/assets/img/contact/icons/${list.iconName}`)"
                  alt="icon"
                  width="24"
                  height="24"
                />
                <p class="list__item-description">{{ list.text }}</p>
              </div>
              <div v-else class="list__item withOutIcon">
                <a
                  v-if="list.type === 'link'"
                  class="list__item-link"
                  :href="list.href"
                  >{{ list.text }}</a
                >
                <p v-else class="list__item-description">{{ list.text }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="contact__office-info photo">
          <AtomsHeading class="mobile__title" type="h4">
            {{ content.title }}
          </AtomsHeading>
          <img
            :src="require(`~/assets/img/contact/block1/${content.imgName}`)"
            alt="offices"
          />
          <span> {{ content.id }} / {{ contentCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    contentCount: {
      type: Number,
      default: 0,
    },
    content: {
      type: Object,
      default: () => ({
        title: '',
        lists: [],
      }),
    },
  },
}
</script>
<style lang="scss" scoped>
.contact__office {
  height: 460px;
  margin-top: 40px;
  background-color: #f2f6f7;
  @include phone() {
    height: 100%;
    .container {
      padding: 0;
    }
  }
  &-info {
    display: flex;
    h3 {
      font-size: rem(28);
      line-height: rem(32);
    }
    @include middle-laptop() {
      flex-direction: column-reverse;
    }
    & .photo {
      max-height: 460px;
      height: 100%;
      position: relative;
      bottom: 0;
      right: calc((1174px - 100vw) / 2);
      .mobile__title {
        display: none;
        position: absolute;
        top: 20%;
        color: white;
        margin-left: 20px;
      }
      @include phone() {
        .mobile__title {
          display: block;
        }
      }
      @include middle-laptop() {
        right: 0;
      }
      span {
        color: white;
        position: absolute;
        top: 15%;
        right: 15%;
      }
    }
  }
}
.content {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 456px;
  padding-bottom: 40px;
  position: relative;
  @include middle-laptop() {
    h3 {
      text-align: center;
    }
    margin: 40px auto;
  }
  @include phone() {
    width: auto;
    padding: 0 16px 40px;
    margin: 20px 0 0;
    h3 {
      display: none;
    }
  }
  &__list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: auto;
    gap: 20px;
    @include phone() {
      margin-top: 0;
    }
    .list {
      &__item {
        width: auto;
        font-family: Roboto, sans-serif;
        .withIcon {
          display: flex;
          align-items: center;
          img {
            margin-right: 12px;
          }
        }
        &-description {
          font-family: Roboto, sans-serif;
          font-size: 18px;
          max-width: 100%;
        }
        &-link {
          font-size: 18px;
          color: #00b0f0;
          text-decoration: underline;
          cursor: pointer;
        }
        @include phone() {
          &-link {
            font-size: 16px;
            line-height: 20px;
          }
          &-description {
            font-size: 16px;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>
