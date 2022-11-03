<template>
  <div>
    <Header />
    <div class="main-container">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from '~/layouts/components/Header'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
