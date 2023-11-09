<script>
import Header from './components/Header.vue';
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';
import Modal from './components/Modal.vue';
import { store } from "./store.js";
import axios from 'axios';

export default {
  components: {
    Header,
    Card,
    Modal,
    Footer,
    store,
  },
  data() {
    return {
      store,
      productName : '',
      productBrand : '',
      productPrice : '',
      visible : false,
      activeProduct: {}
    }
  },
  computed: {
    products() {
      return store.products;
    }
  },
  methods: {
       changeValue(value){
          value = !value;
          console.log(value) 
       },
       showModal(item){
        this.activeProduct = item;
        console.log(item.name)
        this.visible = true;
       },
       hideModal(){
        this.visible = false;
        this.activeProduct = {};
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
      <div class="col-4" v-for="card, i in products" :key="i">
        <Card :item="card" 
        @addFavorite="changeValue"
        @show="showModal"/>
      </div>
    </div>
    <Modal v-show="visible" :item="activeProduct" @click="hideModal"/>
  </main>

  <Footer />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
