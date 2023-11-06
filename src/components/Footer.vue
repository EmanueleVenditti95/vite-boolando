<script>
</script>

<template>
    <footer class="footer-container">
        <div class="container row">
            <div class="col white-text">
                <h3>Boolando s.r.l.</h3>
                <a href="">Informazioni legali</a>
                <a href="">Informativa sulla privacy</a>
                <a href="">Diritto di recesso</a>
            </div>

            <div class="col white-text">
                <p>Trovaci anche su</p>
                <a href=""><i class="fa-brands fa-square-twitter logo-link"></i></a>
                <a href=""><i class="fa-brands fa-square-facebook logo-link"></i></a>
                <a href=""><i class="fa-brands fa-square-instagram logo-link"></i></a>
                <a href=""><i class="fa-brands fa-square-pinterest logo-link"></i></a>
                <a href=""><i class="fa-brands fa-square-youtube logo-link"></i></a>
            </div>
        </div>

    </footer>
</template>

<style lang="scss" scoped>
.footer-container {
    background-color: black;

    .row {
        justify-content: space-between;

        .col {
            font-size: 10px;
            line-height: 20px;
            padding: 10px;

            a {
                padding: 0;
                padding-right: 5px;
                font-size: 10px;

                .logo-link {
                    width: 5px;
                    margin-right: 8px;
                }
            }
        }
    }
}
</style>