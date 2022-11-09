<template>
  <div class="contact">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">Home</AtomsBreadOption>
        <AtomsBreadOption to="/contact">Contact Information</AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb20 contact__title">
        Контактная информация
      </AtomsTitle>
      <div class="contact__tags">
        <AtomsTag
          v-for="(tag, index) of tags"
          :key="index"
          :tag="tag"
          @click="onClickTag"
        />
      </div>
    </div>
    <div v-for="content of contents" :key="content.id">
      <OrganismsSectionContactBlock1Content
        v-if="activeTagId === content.id"
        :contentCount="contents.length"
        :content="content"
      />
    </div>
    <OrganismsSectionContactBlock2 />
    <OrganismsSectionContactBlock3 />
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTagId: 1,
      contents: [
        {
          id: 1,
          title: 'Головной офис ТОО «Тенгизшевройл»',
          imgName: 'content1.jpg',
          lists: [
            {
              id: 11,
              iconName: 'map.svg',
              text: 'Республика Казахстан 060011, г.Атырау , ул. Сатпаева 3',
            },
            {
              id: 12,
              iconName: 'phone.svg',
              text: '+7 712 227 1212 +7 712 302 6000',
            },
            {
              id: 13,
              iconName: 'inbox.svg',
              text: '+7 712 302 6752',
            },
            {
              id: 14,
              iconName: 'mail.svg',
              text: 'tcoinfo@tengizchevroil.com',
            },
          ],
        },
        {
          id: 2,
          title: 'Представительство в г. Нур-Султан',
          imgName: 'content2.jpg',
          lists: [
            {
              id: 15,
              iconName: 'map.svg',
              text: 'Республика Казахстан 010000, г. Нур-Султан, ул. Достык 16 БЦ «Талан Тауэрс», 13-й этаж',
            },
            {
              id: 16,
              iconName: 'phone.svg',
              text: '+7 7172 620333',
            },
            {
              id: 17,
              iconName: 'inbox.svg',
              text: '+7 7172 620336',
            },
          ],
        },
        {
          id: 3,
          title: 'Соискателям',
          imgName: 'content3.jpg',
          lists: [
            {
              id: 15,
              text: 'Для поиска вакансий и регистрации резюме в нашей базе данных пройдите по указанной ниже ссылке',
            },
            {
              id: 16,
              type: 'link',
              text: 'Вакансий',
            },
            {
              id: 17,
              text: 'По вопросам технической поддержки просим обратиться:',
            },
            {
              id: 18,
              iconName: 'mail.svg',
              text: 'tcoinfo@tengizchevroil.com',
            },
          ],
        },
        {
          id: 4,
          title: 'Для запросов СМИ',
          imgName: 'content4.jpg',
          lists: [
            {
              id: 19,
              text: '+7 712 302 6819',
              iconName: 'phone.svg',
            },
            {
              id: 20,
              text: 'tcoinfo@tengizchevroil.com',
              iconName: 'mail.svg',
            },
          ],
        },
        {
          id: 5,
          title:
            'Проект будущего расширения - Проект управления устьевым давлением',
          imgName: 'content5.jpg',
          lists: [
            {
              id: 21,
              text: 'Команда Проекта будущего расширения будет рада вашим отзывам. Просим присылать ваши вопросы и комментарии по адресу:',
            },
            {
              id: 22,
              text: 'tcoinfo@tengizchevroil.com',
              iconName: 'mail.svg',
            },
            {
              id: 23,
              text: '+7712 2 33 32 11 +7712 2 33 32 13',
              iconName: 'phone.svg',
            },
            {
              id: 24,
              text: 'Веб-сайт ПБР-ПУУД',
              type: 'link',
            },
          ],
        },
        {
          id: 16,
          type: 'link',
          text: 'Вакансии'
        },
      ],
      tags: [
        {
          text: 'Головной офис в г.Атырау',
          selected: true,
          id: 1,
        },
        {
          text: 'Представительство в г. Нур-Султан',
          selected: false,
          id: 2,
        },
        {
          text: 'Соискателям',
          selected: false,
          id: 3,
        },
        {
          text: 'Для запросов СМИ',
          selected: false,
          id: 4,
        },
        {
          text: 'Команда Проекта',
          selected: false,
          id: 5,
        },
        {
          text: 'Поставщикам',
          selected: false,
          id: 6,
        },
      ],
    }
  },
  methods: {
    onClickTag(tag) {
      this.activeTagId = tag.id
      this.tags = this.tags.map((element) =>
        element.id === tag.id
          ? { ...tag, selected: true }
          : { ...element, selected: false }
      )
    },
  },
}
</script>
<style lang="scss">
.contact {
  @include phone() {
    h1 {
      padding: 0 16px;
    }
  }
  &__tags {
    max-width: 750px;
    @include middle-laptop() {
      padding: 0 16px;
    }
  }
}
</style>
