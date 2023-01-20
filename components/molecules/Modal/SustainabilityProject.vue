<template>
  <div class="project__popup popup">
    <AtomsHeading type="h4" color="id_popup">
      {{ payload.id }}
    </AtomsHeading>
    <AtomsHeading type="h3" color="text">
      {{ payload.title }}
    </AtomsHeading>
    <div class="popup__accordion">
      <AtomsAccordion
        v-for="item of accordions"
        :key="item.id"
        :is-open="item.isShow"
        filled
        withTable
        @click="onClickAccordion(item)"
      >
        <template #title>
          <AtomsHeading type="h4">{{ item.title }}</AtomsHeading>
        </template>
        <template #content>
          <table class="table">
            <thead class="table__header">
              <tr class="table__row">
                <th class="table__header-item">
                  {{ $t('suistainability.project.popup.year') }}
                </th>
                <th class="table__header-item">
                  {{ $t('suistainability.project.popup.project') }}
                </th>
                <th class="table__header-item">
                  {{ $t('suistainability.project.popup.type') }}
                </th>
                <th class="table__header-item">
                  {{ $t('suistainability.project.popup.settlement') }}
                </th>
              </tr>
            </thead>
            <tbody class="table__body">
              <tr
                v-for="project of item.items"
                :key="project.project"
                class="table__row"
              >
                <td data-label="Год" class="table__body-item">
                  {{ item.year }}
                </td>
                <td data-label="Проект" class="table__body-item">
                  <span>{{ project.project }}</span>
                </td>
                <td data-label="Тип" class="table__body-item">
                  {{ project.type }}
                </td>
                <td data-label="Населенный пункт" class="table__body-item">
                  {{ project.settlement }}
                </td>
              </tr>
            </tbody>
          </table>
        </template>
      </AtomsAccordion>
    </div>
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
  data() {
    return {
      accordion: false,
      accordions: this.payload.projects.map((item, index) => ({
        id: index + 1,
        title: this.$t('suistainability.project.popup.title', {
          year: item.year,
        }),
        isShow: false,
        ...item,
      })),
    }
  },
  methods: {
    onClickAccordion(item) {
      this.accordions = this.accordions.map((accordion) => {
        return accordion.id === item.id && !item.isShow
          ? { ...accordion, isShow: true }
          : { ...accordion, isShow: false }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.project__popup {
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
  .popup {
    &__accordion {
      display: flex;
      flex-direction: column;
    }
  }
  .table {
    border-collapse: collapse;
    &__header {
      background-color: #f2f6f7;
      &-item {
        padding: 10px;
      }
    }
    &__body {
      width: auto;
      &-item {
        padding: 10px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .table {
      &__header {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        &-item {
          color: red;
        }
      }
      &__row {
        display: block;
      }
      &__body {
        &-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ddd;
          border-top: 1px solid #dddddd;
          padding: 8px;
          span {
            display: block;
            position: relative;
            right: -32px;
            word-wrap: break-word;
          }
          &::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            width: 50%;
            text-transform: uppercase;
          }
        }
      }
    }
  }
}
</style>
