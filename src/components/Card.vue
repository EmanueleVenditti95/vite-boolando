<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
}
</script>

<template>
    <div class="card">
        <div class="list-pic">
            <div class="figure">
                <img :src="item.frontImage" alt="">
                <img class="img-hover" :src="item.backImage" alt="">
            </div>
            <div class="square">
                <div v-for="badge, index in item.badges.slice().reverse()" :key="index" 
                :class="badge.type === 'discount' ? 'red-square' : 'green-square'">
                    {{ badge.value }}
                </div>
            </div>

            <div class="wishlist-badge"
            @click="item.isInFavorites = !item.isInFavorites"
            :class="item.isInFavorites ? 'favorites' : '' "
            >
                &hearts;
            </div>
        </div>
        <div>
            <ul>
                <li class="brand">{{ item.brand }}</li>
                <li class="item" @click="$emit('show',item)">{{ item.name }}</li>
                <li class="price">{{ item.price }} &euro;</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
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

        .favorites {
            color: red;
        }

        .wishlist-badge:hover {
            color: red;
        }
    }

    

    .old-price {
        color: grey;
        font-size: small;
        text-decoration: line-through;
    }
}
</style>