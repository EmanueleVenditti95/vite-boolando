<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    }
}
</script>

<template>
    <div class="modal">
        <div class="modal__text">
            <p class="brand">{{ item.brand }}</p>
            <p class="item">{{ item.name }}</p>
            <p class="price">{{ item.price }}</p>
            <i class="fa-regular fa-circle-xmark close-cross"></i>
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    background-color: white;
    width: 100%;
    max-width: 300px;
    text-align: center;
    border: 1px solid black;
}
.modal__text {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99;
    padding: 20px;
    background-color: white;
    width: 100%;
    max-width: 300px;
    text-align: center;
    border: 1px solid black;
  }

  .modal::after {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: rgba(0,0,0,0.5);
  }

  .close-cross {
    position: absolute;
    right: 5px;
    top : 5px;
    cursor: pointer;
  }
</style>