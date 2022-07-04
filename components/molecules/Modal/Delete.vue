<template>
  <div class="mod">
    <AtomsHeading type="h4"> Хотите удалить?</AtomsHeading>
    <AtomsButton width="260px" type="outline" class="first" @click="close">
      Отменить
    </AtomsButton>
    <AtomsButton type="secondary" width="260px" @click="showMod">
      Удалить
    </AtomsButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    }
  },
  methods: {
    showMod() {
      this.$modal.push({ title: 'Success' })
    },
    close() {
      this.$modal.close()
    },
  },
}
</script>

<style lang="scss" scoped>
.mod {
  padding: 30px;
}
.first {
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
