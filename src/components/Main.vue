<script>
import cards from "../db.json"

export default {
    components: {
    },
    data() {
        return {
            products: cards.products
        }
    },
    created() {
        console.log(this.products)
    }
}
</script>

<template>
    <main class="container">
        <div class="row">

            <div v-for="card, i in products" :key="i" class="card">
                <div class="list-pic">
                    <div class="figure">
                        <img :src="card.frontImage" alt="">
                        <img class="img-hover" :src="card.backImage" alt="">
                    </div>
                    <div class="square">
                        <div class=" red-square">-50%</div>
                        <div class=" green-square">Sostenibilità</div>
                    </div>
                    <div class="wishlist-badge">&hearts;</div>
                </div>
                <div>
                    <ul>
                        <li class="brand">{{ card.brand }}</li>
                        <li class="item">{{ card.name }}</li>
                        <li class="price">{{ card.price }} &euro;</li>
                    </ul>
                </div>
            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>
.container {
    padding-bottom: 80px;
}

.row {
    flex-wrap: wrap;
    margin: 20px 0;
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