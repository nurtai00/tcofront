<template>
  <div class="career_motivation_popup">
    <AtomsHeading type="h4" color="id_popup">
      {{ payload.id }}
    </AtomsHeading>
    <AtomsHeading type="h3" color="text">
      {{ payload.title }}
    </AtomsHeading>
    <ul>
      <li v-for="(list, index) of payload.list" :key="index + list">
        {{ list }}
      </li>
    </ul>
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
  ul {
    margin-left: 20px;
    li {
      list-style: disc;
      font-size: 20px;
      color: $c-text;
      line-height: 32px;
      font-family: Roboto, sans-serif;
      font-weight: 300;
    }
  }
}
</style>
