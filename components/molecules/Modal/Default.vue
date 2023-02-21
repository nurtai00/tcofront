<template>
  <div class="career_motivation_popup">
    <AtomsHeading type="h4">
      {{ payload.id }}
    </AtomsHeading>
    <AtomsHeading type="h3" color="main">
      {{ payload.title }}
    </AtomsHeading>
    <template v-if="withWhiteSpaces">
      <p
        v-for="text of payload.text"
        :key="text"
        class="default_modal_text"
        style="padding-top: 15px"
      >
        {{ text }}
      </p>
    </template>
    <p v-else class="default_modal_text" v-html="payload.text"></p>
    <template v-if="!!payload.imgSrc && payload.imgSrc.length">
      <img :src="require(`@/assets/img/${payload.imgSrc}`)" alt="img" />
    </template>
    <template v-if="!!payload.videoUrl">
      <iframe
        class="iframe"
        height="380"
        style="margin-top: 20px"
        :src="payload.videoUrl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </template>
    <a
      v-if="!!payload.link"
      style="margin-top: 20px; display: inline-block"
      :href="payload.link"
      target="_blank"
      >{{ payload.link }}</a
    >
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
  computed: {
    withWhiteSpaces() {
      return Array.isArray(this.$props.payload.text)
    },
  },
}
</script>

<style lang="scss" scoped>
.iframe {
  max-width: 700px;
  width: 100%;
  @include phone {
    height: 200px;
  }
}
.career_motivation_popup {
  width: 100%;
  max-width: 696px;
  h3 {
    margin: 20px 0 40px;
    @include tablet() {
      margin: 20px 0;
    }
  }
  img {
    margin-top: 20px;
    max-width: 100%;
  }
}
</style>
