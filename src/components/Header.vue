<script setup>


</script>

<template>
    <header class="viewport-container">
        <div class="container">
            <nav class="row">
                <section class="col">
                    <ul>
                        <li><a class="white-text" href="">Donna</a></li>
                        <li><a class="white-text" href="">Uomo</a></li>
                        <li><a class="white-text" href="">Bambino</a></li>
                    </ul>
                </section>

                <section class="col flex">
                    <img class="logo" src="/img/boolean-logo.png" alt="BooleanLogo">
                </section>

                <section class="col">
                    <ul>
                        <li><a class="white-text" href=""><i class="fa-regular fa-user"></i></a></li>
                        <li><a class="white-text" href=""><i class="fa-regular fa-heart"></i></a></li>
                        <li><a class="white-text" href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
                    </ul>
                </section>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.flex {
    display: flex;
}

li {
    display: inline;

    a {
        color: white;
        font-size: 12px;
        padding: 0 10px;
    }
}

.viewport-container {
    background-color: #FF6900;
    position: sticky;
    z-index: 999;
    top: 0;
}

.row {
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 100px;
    padding: 10px 0;
}
</style>
