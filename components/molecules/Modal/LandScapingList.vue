<template>
  <div class="career_motivation_popup">
    <AtomsHeading type="h4">
      {{ payload.id }}
    </AtomsHeading>
    <AtomsHeading type="h3" color="main">
      {{ payload.title }}
    </AtomsHeading>
    <p v-for="text of payload.listTitle" :key="text" class="text">
      {{ text }}
    </p>
    <ul class="list">
      <li v-for="list of payload.list" :key="list" class="list-item text">
        {{ list }}
      </li>
    </ul>
    <p v-for="text of payload.listDescription" :key="text" class="text">
      {{ text }}
    </p>
    <ul class="list">
      <li v-for="list2 of payload.list2" :key="list2" class="list-item text">
        {{ list2 }}
      </li>
    </ul>
    <p class="text">
      {{ payload.list2Description }}
    </p>
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
.list {
  margin-left: 20px;
  &-item {
    list-style: disc !important;
  }
}
.text {
  font-size: 16px;
  display: inline-block;
  margin-top: 15px;
  color: $c-main;
}
</style>
