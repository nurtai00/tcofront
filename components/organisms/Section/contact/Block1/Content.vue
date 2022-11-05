<template>
  <div class="contact__office">
    <div class="container">
      <div class="contact__office-info">
        <div class="contact__office-info content">
          <AtomsHeading type="h2" color="black">
            {{ content.title }}
          </AtomsHeading>
          <ul class="content__list list">
            <li v-for="list of content.lists" :key="list.id" class="list__item" :class="{fullWidth: !list.iconName}">
              <div v-if="!!list.iconName" class="list__item withIcon">
                <img
                  :src="require(`~/assets/img/contact/icons/${list.iconName}`)"
                  alt="icon"
                  width="24"
                  height="24"
                />
                <p>{{ list.text }}</p>
              </div>
              <div v-else class="list__item withOutIcon">
                <a v-if="list.type === 'link'" :href="list.href">{{ list.text }}</a>
                <p v-else>{{ list.text }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="contact__office-info photo">
          <img :src="require(`~/assets/img/contact/block1/${content.imgName}`)" alt="offices">
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
      type: Number
    },
    content: {
      type: Object,
      default: () => ({
        title: '',
        lists: []
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.contact__office {
  margin-top: 40px;
  background-color: #F2F6F7;
  &-info {
    display: flex;
    & .photo {
      position: relative;
      bottom: 0;
      right: calc((1174px - 100vw) / 2);
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
  padding-bottom: 40px;
  &__list {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    .list {
      &__item {
        width: auto;
        font-family: Roboto, sans-serif;
        margin-top: 14px;
        &.fullWidth {
          width: auto;
        }
        .withIcon {
          display: flex;
          align-items: center;
          img {
            margin-right: 12px;
          }
        }
        p {
          font-family: Roboto, sans-serif;
          font-size: 18px;
        }
        a {
          font-size: 18px;
          color: #00b0f0;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
