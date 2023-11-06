<script>
</script>

<template>
    <header class="viewport-container">
        <div class="container">
            <nav class="row">
                <section class="col">
                    <ul>
                        <li><a href="">Donna</a></li>
                        <li><a href="">Uomo</a></li>
                        <li><a href="">Bambino</a></li>
                    </ul>
                </section>

                <section class="col flex">
                    <img class="logo" src="/img/boolean-logo.png" alt="BooleanLogo">
                </section>

                <section class="col">
                    <ul>
                        <li><a href=""><i class="fa-regular fa-user"></i></a></li>
                        <li><a href=""><i class="fa-regular fa-heart"></i></a></li>
                        <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
                    </ul>
                </section>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.viewport-container {
    background-color: #FF6900;
    position: sticky;
    z-index: 999;
    top: 0;

    .row {
        justify-content: space-between;
        align-items: center;

        .logo {
            width: 100px;
            padding: 10px 0;
        }

        li {
            display: inline;
        }
    }

}
</style>
