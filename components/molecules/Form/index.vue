<template>
  <form ref="form" :class="$attrs.class" @submit.prevent="submit">
    <slot />
  </form>
</template>

<script>
/**
 * MOLECULES/Form
 * @displayName Form
 */
export default {
  name: 'Form',
  props: {
    /**
     * Method handled on submit
     */
    onSubmit: {
      type: Function,
      required: true,
    },
    /**
     * Data object
     */
    data: {
      type: Object,
      default: () => ({}),
    },
    /**
     * Data sent
     */
    errorScroll: {
      type: Boolean,
      default: true,
    },
    /**
     * Show errors
     */
    errorShow: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    error: [],
  }),
  mounted() {
    this.validate()
  },
  updated() {
    this.$nextTick(() => {
      this.validate()
    })
  },
  methods: {
    async submit() {
      if (this.error.length) {
        this.error[0].el.classList.add('show-error')
        this.error[0].el.scrollIntoView({ behavior: 'smooth' })
      } else if (!this.data.url) {
        this.onSubmit()
      } else {
        try {
          await this.$axios[this.data.method](
            this.data.url,
            this.data.data
          ).then((response) => {
            this.onSubmit(response.data)
          })
        } catch (e) {
          const error = e.response?.data?.errors
          if (error) {
            Object.values(error).forEach((value) => this.error.push(value))
          } else {
            this.error = [e.response?.data?.message]
          }
        }
      }
    },
    validate() {
      const fields = this.$refs.form.querySelectorAll('.validate-me')
      this.error = []
      fields.forEach((field) => {
        if (field.classList.contains('has-error')) {
          this.error.push({
            el: field,
            message: 'Проверьте правильность заполнения поля',
          })
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.errors {
  color: red;
  padding: 10px 0 20px;

  &__item {
    margin-bottom: 12px;
  }
}
</style>
