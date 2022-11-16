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
        @click="item.isShow = !item.isShow"
      >
        <template #title>
          <AtomsHeading type="h4">{{ item.title }}</AtomsHeading>
        </template>
        <template #content>
          <table class="table">
            <thead class="table__header">
              <tr class="table__row">
                <th class="table__header-item">Год</th>
                <th class="table__header-item">Проект</th>
                <th class="table__header-item">Тип</th>
                <th class="table__header-item">Населенный пункт</th>
              </tr>
            </thead>
            <tbody class="table__body">
              <tr
                v-for="collapseItem of item.collapseItems"
                :key="collapseItem.year"
                class="table__row"
              >
                <td data-label="Год" class="table__body-item">
                  {{ collapseItem.year }}
                </td>
                <td data-label="Проект" class="table__body-item">
                  <span>{{ collapseItem.project }}</span>
                </td>
                <td data-label="Тип" class="table__body-item">
                  {{ collapseItem.type }}
                </td>
                <td data-label="Населенный пункт" class="table__body-item">
                  {{ collapseItem.place }}
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
      accordions: Array.from({ length: 24 }, (_, index) => ({
        id: index + 1,
        title: `Проекты за ${1999 + index}`,
        isShow: false,
        collapseItems: [
          {
            year: 1999 + index,
            project: 'Реконструкция моста через р. Урал в г. Атырау',
            type: 'Прочая инфраструктура',
            place: 'г.Атырау',
          },
          {
            year: 1999 + index + 1,
            project: 'Реконструкция моста через р. Урал в г. Атырау',
            type: 'Прочая инфраструктура',
            place: 'г.Атырау',
          },
        ],
      })),
    }
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
