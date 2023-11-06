<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {

    }
  }
};

</script>

<template>
  <Header />
  <Main />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
}

body {
  position: relative;
}

ol,
ul,
li {
  list-style: none;
}

.container {
  width: 800px;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-direction: row;
}

img {
  max-width: 100%;
}
</style>
