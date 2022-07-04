<template>
  <ul v-if="totalPages !== 1">
    <PageButton
      v-if="currentPage !== 1"
      :is-arrow="true"
      :left="true"
      :to="pagePath(currentPage - 1)"
    />

    <template v-if="totalPages > 3 && currentPage > 2">
      <PageButton :to="pagePath(1)">1</PageButton>
      <PageButton v-if="totalPages > 4 && currentPage > 3">...</PageButton>
    </template>

    <PageButton
      v-for="page in pages"
      :key="page"
      :is-active="currentPage === page"
      :to="pagePath(page)"
    >
      {{ page }}
    </PageButton>

    <template v-if="totalPages > 3 && currentPage < totalPages - 1">
      <PageButton v-if="totalPages > 4 && currentPage < totalPages - 2">
        ...
      </PageButton>
      <PageButton :to="pagePath(totalPages)">
        {{ totalPages }}
      </PageButton>
    </template>

    <PageButton
      v-if="currentPage < totalPages"
      :is-arrow="true"
      :to="pagePath(currentPage + 1)"
    />
  </ul>
</template>

<script>
import PageButton from 'atoms/PageButton'

/**
 * Пагинация
 * @displayName Pagination
 */
export default {
  name: 'Pagination',
  components: {
    PageButton,
  },
  props: {
    /**
     * Количество страниц
     */
    totalPages: {
      type: Number,
      default: 1,
    },
    /**
     * Имя маршрута
     */
    routeName: {
      type: String,
      default: '/',
    },
    /**
     * Текущая страница
     */
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    pages() {
      if (this.currentPage === 1) {
        return [1, 2, 3].filter((number) => number <= this.totalPages)
      }
      if (this.currentPage < this.totalPages) {
        return [
          this.currentPage - 1,
          this.currentPage,
          this.currentPage + 1,
        ].filter((number) => number <= this.totalPages && number > 0)
      }
      if (this.currentPage === this.totalPages) {
        return [
          this.currentPage - 2,
          this.currentPage - 1,
          this.currentPage,
        ].filter((number) => number > 0)
      }

      return []
    },
  },
  methods: {
    pagePath(page) {
      return {
        name: this.routeName,
        query: { ...this.$route.query, page },
      }
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  width: 430px;
  margin: auto;
  @include phone {
    width: 100%;
  }
}
</style>
