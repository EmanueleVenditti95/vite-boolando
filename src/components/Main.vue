<script>

</script>

<template>
    <main class="container">
        <div class="row">

            <div class="card">
                <div class="list-pic">
                    <div class="figure">
                        <img src="/img/1.webp" alt="">
                        <img class="img-hover" src="/img/1b.webp" alt="">
                    </div>
                    <div class="square">
                        <div class=" red-square">-50%</div>
                        <div class=" green-square">Sostenibilità</div>
                    </div>
                    <div class="wishlist-badge">&hearts;</div>
                </div>
                <div>
                    <ul>
                        <li class="brand">Levi's</li>
                        <li class="item">RELAXED FIT TEE UINSEX</li>
                        <li class="price">14.99 &euro; <span class="old-price">29.99 &euro;</span></li>
                    </ul>
                </div>
            </div>

            <div class="card">
                <div class="list-pic">
                    <div class="figure">
                        <img src="/img/2.webp" alt="">
                        <img class="img-hover" src="/img/2b.webp" alt="">
                    </div>
                    <div class="square red-square">-50%</div>
                    <div class="wishlist-badge">&hearts;</div>
                </div>
                <div>
                    <ul>
                        <li class="brand">Guess</li>
                        <li class="item">ROSES TEE</li>
                        <li class="price">20.99 &euro; <span class="old-price">29.99 &euro;</span></li>
                    </ul>
                </div>
            </div>

            <div class="card">
                <div class="list-pic">
                    <div class="figure">
                        <img src="/img/3.webp" alt="">
                        <img class="img-hover" src="/img/3b.webp" alt="">
                    </div>
                    <div class="square red-square">-50%</div>
                    <div class="wishlist-badge">&hearts;</div>
                </div>
                <div>
                    <ul>
                        <li class="brand">Come Zucchero Filato</li>
                        <li class="item">VOGLIA DI COLORI PASTELLO</li>
                        <li class="price">129.99 &euro; <span class="old-price">184.99 &euro;</span></li>
                    </ul>
                </div>
            </div>

            <div class="card">
                <div class="list-pic">
                    <div class="figure">
                        <img src="/img/4.webp" alt="">
                        <img class="img-hover" src="/img/4b.webp" alt="">
                    </div>
                    <div class="square red-square">-50%</div>
                    <div class="square green-square">Sostenibilità</div>
                    <div class="wishlist-badge">&hearts;</div>
                </div>
                <div>
                    <ul>
                        <li class="brand">Levi's</li>
                        <li class="item">TEE UNISEX</li>
                        <li class="price">14.99 &euro; <span class="old-price">29.99 &euro;</span></li>
                    </ul>
                </div>
            </div>

            <div class="card">
                <div class="list-pic">
                    <div class="figure">
                        <img src="/img/5.webp" alt="">
                        <img class="img-hover" src="/img/5b.webp" alt="">
                    </div>
                    <div class="wishlist-badge">&hearts;</div>
                </div>
                <div>
                    <ul>
                        <li class="brand">Maya Deluxe</li>
                        <li class="item">STRIPE BODICE</li>
                        <li class="price">99.99 &euro;</li>
                    </ul>
                </div>
            </div>

            <div class="card">
                <div class="list-pic">
                    <div class="figure">
                        <img src="/img/6.webp" alt="">
                        <img class="img-hover" src="/img/6b.webp" alt="">
                    </div>
                    <div class="square green-square">Sostenibilità</div>
                    <div class="wishlist-badge">&hearts;</div>
                </div>
                <div>
                    <ul>
                        <li class="brand">Esprit</li>
                        <li class="item">MAGLIONE - BLACK</li>
                        <li class="price">29.99 &euro;</li>
                    </ul>
                </div>
            </div>

        </div>

    </main>
</template>

<style lang="scss" scoped>
.row {
    flex-wrap: wrap;
}

.card {
    flex-basis: calc(100% / 3);
    padding: 20px 10px;

    .list-pic {
        position: relative;

        .figure:hover {
            .img-hover {
                opacity: 1;
            }
        }

        .figure {
            position: relative;
            max-width: 100%;

            .img-hover {
                position: absolute;
                inset: 0;
                opacity: 0;
                transition: opacity 0.5s;
            }
        }

        .square {
            line-height: 15px;
            color: white;
            font-size: 8px;
            position: absolute;
            bottom: 30px;
            display: flex;
            gap: 4px;
            justify-content: center;
            align-items: center;
        }

        .red-square {
            background-color: red;
            padding: 0 10px;
        }

        .green-square {
            background-color: green;
            padding: 0 5px;
        }

        .wishlist-badge {
            position: absolute;
            background-color: white;
            top: 10px;
            right: 0px;
            padding: 5px 10px;
            font-size: 20px;
        }

        .wishlist-badge:hover {
            color: red;
        }
    }

    .brand {
        color: grey;
        font-size: small;
    }

    .item {
        font-weight: 800;
    }

    .price {
        font-size: small;
        color: red;
    }

    .old-price {
        color: grey;
        font-size: small;
        text-decoration: line-through;
    }
}
</style>