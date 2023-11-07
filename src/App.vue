<script>
import Header from './components/Header.vue';
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';
import productsObj from "./db.json";

export default {
  components: {
    Header,
    Card,
    Footer,
    productsObj
  },
  data() {
    return {
      products: productsObj.products
    }
  },
  created() {
    console.log(this.products)
  }
};

</script>

<template>
  <Header />

  <main class="container">
    <div class="row">
      <div class="col-4" v-for="card, i in products" :key="i">
        <Card :item="card" />
      </div>
    </div>
  </main>

  <Footer />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
