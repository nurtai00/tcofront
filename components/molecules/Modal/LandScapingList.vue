<template>
  <div class="career_motivation_popup">
    <AtomsHeading type="h4">
      {{ payload.id }}
    </AtomsHeading>
    <AtomsHeading type="h3" color="main">
      {{ payload.title }}
    </AtomsHeading>
    <p v-for="text of payload.listTitle" :key="text" class="default-text">
      {{ text }}
    </p>
    <ul class="list">
      <li
        v-for="list of payload.list"
        :key="list"
        style="list-style-type: disc"
        class="list-item default-text"
      >
        {{ list }}
      </li>
    </ul>
    <p v-for="text of payload.listDescription" :key="text" class="default-text">
      {{ text }}
    </p>
    <ul class="list">
      <li
        v-for="list2 of payload.list2"
        :key="list2"
        class="list-item default-text"
      >
        {{ list2 }}
      </li>
    </ul>
    <p class="default-text">
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

<style lang="scss">
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
    max-width: 100%;
  }
}
.list {
  &-item {
    margin-left: 40px;
  }
}
.default-text {
  font-size: 20px;
  list-style: disc;
  margin-top: 15px;
  font-family: Roboto, sans-serif;
  color: #30454e;
}
</style>
