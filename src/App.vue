<script>
import Header from './components/Header.vue';
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';
import { store } from "./store.js";
import axios from 'axios';

export default {
  components: {
    Header,
    Card,
    Footer,
    store,
  },
  data() {
    return {
      store
    }
  },
  created() {
    axios.get('http://localhost:3000/products')
      .then(res => {
        console.log(res);
        this.store.products = res.data;         
      })
  },
  mounted() {
    
  }
};

</script>

<template>
  <Header />

  <main class="container">
    <div class="row">
      <div class="col-4" v-for="card, i in store.products" :key="i">
        <Card :item="card" />
      </div>
    </div>
  </main>

  <Footer />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
