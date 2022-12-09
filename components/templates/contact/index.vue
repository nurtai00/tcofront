<template>
  <div class="contact">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption to="/">{{ $t('contact.main') }}</AtomsBreadOption>
        <AtomsBreadOption to="/contact">
          {{ $t('contact.contact') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle class="mb20 contact__title">
        {{ $t('contact.contact') }}
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
      tags: [
        {
          text: this.$t('contact.tags.1'),
          selected: true,
          id: 1,
        },
        {
          text: this.$t('contact.tags.2'),
          selected: false,
          id: 2,
        },
        {
          text: this.$t('contact.tags.3'),
          selected: false,
          id: 3,
        },
        {
          text: this.$t('contact.tags.4'),
          selected: false,
          id: 4,
        },
        {
          text: this.$t('contact.tags.5'),
          selected: false,
          id: 5,
        },
        {
          text: this.$t('contact.tags.6'),
          selected: false,
          id: 6,
        },
      ],
      contents: [
        {
          id: 1,
          title: this.$t('contact.contents.1.title'),
          imgName: 'content1.jpg',
          lists: [
            {
              id: 11,
              iconName: 'map.png',
              text: this.$t('contact.contents.1.text'),
            },
            {
              id: 12,
              iconName: 'phone.png',
              text: '+7 712 227 1212 +7 712 302 6000',
            },
            {
              id: 13,
              iconName: 'inbox.png',
              text: '+7 712 302 6752',
            },
            {
              id: 14,
              iconName: 'mail.png',
              text: 'tcoinfo@tengizchevroil.com',
            },
          ],
        },
        {
          id: 2,
          title: this.$t('contact.contents.2.title'),
          imgName: 'content2.jpg',
          lists: [
            {
              id: 15,
              iconName: 'map.png',
              text: this.$t('contact.contents.2.text'),
            },
            {
              id: 16,
              iconName: 'phone.png',
              text: '+7 7172 620333',
            },
            {
              id: 17,
              iconName: 'inbox.png',
              text: '+7 7172 620336',
            },
          ],
        },
        {
          id: 3,
          title: this.$t('contact.contents.3.title'),
          imgName: 'content3.jpg',
          lists: [
            {
              id: 15,
              text: this.$t('contact.contents.3.text1'),
            },
            {
              id: 16,
              type: 'link',
              text: this.$t('contact.contents.3.text2'),
            },
            {
              id: 17,
              text: this.$t('contact.contents.3.text3'),
            },
            {
              id: 18,
              iconName: 'mail.png',
              text: 'tcoinfo@tengizchevroil.com',
            },
          ],
        },
        {
          id: 4,
          title: this.$t('contact.contents.4.title'),
          imgName: 'content4.jpg',
          lists: [
            {
              id: 19,
              text: '+7 712 302 6819',
              iconName: 'phone.png',
            },
            {
              id: 20,
              text: 'tcoinfo@tengizchevroil.com',
              iconName: 'mail.png',
            },
          ],
        },
        {
          id: 5,
          title: this.$t('contact.contents.5.title'),
          imgName: 'content5.jpg',
          lists: [
            {
              id: 21,
              text: this.$t('contact.contents.5.text1'),
            },
            {
              id: 22,
              text: 'tcoinfo@tengizchevroil.com',
              iconName: 'mail.png',
            },
            {
              id: 23,
              text: '+7712 2 33 32 11 +7712 2 33 32 13',
              iconName: 'phone.png',
            },
            {
              id: 24,
              text: this.$t('contact.contents.5.text2'),
              type: 'link',
            },
          ],
        },
        {
          id: 6,
          title: this.$t('contact.contents.6.title'),
          imgName: 'content6.jpg',
          lists: [
            {
              id: 25,
              text: this.$t('contact.contents.6.text1'),
            },
            {
              id: 26,
              text: this.$t('contact.contents.6.text2'),
              type: 'link',
            },
          ],
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
