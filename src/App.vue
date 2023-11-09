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
        this.productName = item.name;
        this.productBrand = item.brand;
        this.productPrice = item.price;
        console.log(item.name)
        this.visible = true;
       },
       hideModal(){
        this.visible = false;
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
    <div 
    v-show="this.visible"
    class="modal">
      <div class="modal__text">
        <p class="brand">{{ this.productBrand }}</p>
        <p class="item">{{ this.productName }}</p>
        <p class="price">{{ this.productPrice }}</p>
        <i @click="hideModal" class="fa-regular fa-circle-xmark close-cross"></i>
      </div>       
    </div>
  </main>

  <Footer />
</template>

<style lang="scss">
@use './styles/general.scss';
@use './styles/modal.scss';
</style>
