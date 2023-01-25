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
        },
      ],
    }
  },
}
</script>
