<template>
  <div class="landscaping">
    <div class="landscaping__img">
      <!--      <img src="@/assets/img/sustainability/block2.jpg" alt="block1" />-->
      <div class="landscaping__content">
        <OperationSlide
          v-for="(slide, index) of slides"
          :key="index + 'key'"
          is-reverse
          side
          :data="slide"
          has-emit
          @popup="openPopup"
        >
          <template #description="{ description }">
            <p>{{ description }}</p>
          </template>
        </OperationSlide>
      </div>
    </div>
  </div>
</template>
<script>
import OperationSlide from 'organisms/Section/Operation/Slide'
export default {
  components: { OperationSlide },
  data() {
    return {
      slides: [
        {
          title: this.$t('suistainability.landScaping.title'),
          description: this.$t('suistainability.landScaping.description'),
          image: 'sustainability/block-3.png',
          list: this.$t('suistainability.landScaping.list'),
          listDescription: this.$t(
            'suistainability.landScaping.listDescription'
          ),
          list2: this.$t('suistainability.landScaping.list2'),
          list2Description: this.$t(
            'suistainability.landScaping.list2Description'
          ),
          listTitle: this.$t('suistainability.landScaping.listTitle'),
        },
      ],
    }
  },
  methods: {
    openPopup() {
      this.$modal.add({
        title: 'LandScapingList',
        payload: {
          title: this.slides[0].title,
          modal: 'LandScapingList',
          listTitle: this.slides[0].listTitle,
          list: this.slides[0].list,
          list2Description: this.slides[0].list2Description,
          listDescription: this.slides[0].listDescription,
          list2: this.slides[0].list2,
        },
      })
    },
  },
}
</script>
